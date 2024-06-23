import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('order_id');
    console.log(orderId)

    if (!orderId) {
        responseData.error = 'Order ID is required';
        return Response(responseData.error, { status: 400 });
    }
    try {

        const order = await query({
            query: "SELECT * FROM orders_minca WHERE order_id = ?",
            values: [orderId],
        });
        
        //let data = JSON.stringify(order);
        return NextResponse.json({ data: order }, { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: error
        }), { status: 500});
    }
}

export async function POST(request) {
    try {
        const order = await request.json();
        const updateOrder = await query({
            query: `INSERT INTO orders_minca (
                order_id, first_name, last_name, principal_address, showroom_address, 
                city, region, type_of_housing, coutry, email, phone, identification, 
                neighborhood, addressee, recipient_phone, company, email_company, nit, 
                phone_company, business_name
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            values: [
                order.order_id, order.first_name, order.last_name, order.principal_address, 
                order.showroom_address, order.city, order.region, order.type_of_housing, 
                order.coutry, order.email, order.phone, order.identification, order.neighborhood, 
                order.addressee, order.recipient_phone, order.company, order.email_company, 
                order.nit, order.phone_company, order.business_name
            ],
        });
        const result = updateOrder.affectedRows;
        console.log(result)
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
