import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/resend/email-template";

const resend = new Resend(process.env.RESEEND_API_KEY_MINCA);

export async function POST(req) {
  const data = await req.json();
  try {
    // Extract the data from the request body

    if (!data) {
      throw new Error("Request body is missing");
    }

    const shipping = data.shipping;
    const billing = data.billing;

    const email = shipping.Email || billing.Email;

    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA,
      to: [
        email,
        // process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA,
        // process.env.EMAIL_ADDRESS_CLIENT_BRUMA,
      ],
      subject: "¡Muchas gracias por tu compra en Minca Electric!",
      react: (
        <EmailTemplate
          firstName="MINCA"
          shipping={shipping}
          billing={billing}
          products={data.products}
          id={data.id}
        />
      ),
    });

    return NextResponse.json(
      { message: "Email sent", emailResponse },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
