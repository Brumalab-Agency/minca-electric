import { EmailAbandoned } from "@/components/resend/email-abandoned-cart";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEEND_API_KEY_MINCA);

export async function POST(req) {
  const data = await req.json();
  try {
    // Extract the data from the request body

    if (!data) {
      throw new Error("Request body is missing");
    }

    console.log(data);

    const email = data.email;
    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA,
      to: [
        email,
        process.env.EMAIL_ADDRESS_CLIENT_BRUMA,
        process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA,
      ],
      subject: "Aquí guardamos tu carrito👌",
      react: <EmailAbandoned products={data.products} />,
    });

    console.log(data);

    return NextResponse.json(
      { message: "Email sent", emailResponse },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
