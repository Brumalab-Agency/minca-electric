import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
        responseData.error = 'Order ID is required';
        return Response(responseData.error, { status: 400 });
    }
    try {

        const [products] = await query({
            query: "SELECT * FROM order_products WHERE order_id = ?",
            values: [orderId],
        });
        return NextResponse.json({ data: products }, { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({
            error: error
        }), { status: 500});
    }
}

export async function POST(request) {
    try {
        const product = await request.json();
        const updateProduct = await query({
            query: `INSERT INTO order_products (
                order_id, name, quantity, price, shippingPrice, difference, totalPrice, image
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            values: [
                product.order_id, product.name, product.quantity, product.price,
                product.shippingPrice, product.difference, product.totalPrice, product.image 
            ],
        });
        const result = updateProduct.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        return NextResponse.json({ body: result }, { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({
            error: error
        }), { status: 500});
    }
}
