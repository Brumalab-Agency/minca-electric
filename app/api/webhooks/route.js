import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log(request.url);
    const url = new URL(request.url);
    const topic = url.searchParams.get("topic");
    const id = url.searchParams.get("id");
    console.log(topic, id);
    if (topic === "payment" && id) {
      const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${id}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${process.env.MERCADOPAGO_SECRET_KEY}`,
          },
        },
      );
      console.log("Payment:", response.data);
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error en el webhook:", error);
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}
