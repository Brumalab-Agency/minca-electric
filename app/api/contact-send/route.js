import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTamplateContact } from "@/components/resend/email-template-contact";

const resend = new Resend(process.env.RESEEND_API_KEY_MINCA);

export async function POST(req) {
  const data = await req.json();
  try {
    // Extract the data from the request body

    if (!data) {
      throw new Error("Request body is missing");
    }
    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA,
      to: [
        process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA,
        process.env.EMAIL_ADDRESS_CLIENT_BRUMA,
      ],
      subject: "Nueva solicitud de contacto",
      react: <EmailTamplateContact Data={data} />,
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
