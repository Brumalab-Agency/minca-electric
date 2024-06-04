import EmailNewsLetter from "@/components/resend/email-news-letter";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEEND_API_KEY_MINCA);

export async function POST(req) {
  const email = await req.json();
  try {
    // Extract the data from the request body

    if (!email) {
      throw new Error("Request body is missing");
    }

    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA,
      to: [
        email,
        process.env.EMAIL_ADDRESS_CLIENT_BRUMA,
      ],
      subject: "Detalles de tu suscripcion👌",
      react: <EmailNewsLetter/>,
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
