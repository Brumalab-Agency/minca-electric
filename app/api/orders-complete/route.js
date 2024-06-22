import { query } from "@/lib/db";
import { stat } from "fs";

export async function GET(request) {
    const users = await query({
        query: "SELECT * FROM orders_minca",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

export async function POST(request) {
    try {
        const order = await request.json();
        const updateOrder = await query({
            query: "INSERT INTO orders_minca (order_id, first_name, last_name, principal_address, showroom_address, city, region, type_of_housing, coutry, email, phone, identification, neighborhood, addressee, recipient_phone, company, email_company, nit, phone_company, business_name) VALUES (?)",
            values: [order.order_id, order.first_name, order.last_name, order.principal_address, order.showroom_address, order.city, order.region, order.type_of_housing, order.coutry, order.email, order.phone, order.identification, order.neighborhood, order.addressee, order.recipient_phone, order.company, order.email_company, order.nit, order.phone_company, order.business_name],
        });
        console.log(updateOrder)
        const result = updateOrder.affectedRows;
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
