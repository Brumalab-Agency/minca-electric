import { query } from "@/lib/db";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
        responseData.error = 'Order ID is required';
        return Response(responseData.error, { status: 400 });
    }
    try {

        const order = await query({
            query: "SELECT * FROM orders_minca WHERE order_id = ?",
            values: [orderId],
        });
        
        let data = JSON.stringify(order);
        return new Response(data, {
            status: 200,
        });
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
                product_id, order_id, pruduct_id, order_id, product_name, quantity, subtotal, shipping_price, discount, total, image	
 
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            values: [
                product.product_id, product.order_id, product.product_name, product.quantity, product.subtotal,
                product.shipping_price, product.discount, product.total, product.image 
            ],
        });
        console.log(updateProduct)
        const result = updateProduct.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        return new Response({
            message: message,
            status: 200,
            order: order
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: error
        }), { status: 500});
    }
}
