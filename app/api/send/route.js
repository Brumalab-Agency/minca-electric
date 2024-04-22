import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const rawData = await req.json()
  const data = JSON.parse(rawData); // Parse the JSON string into an object
  try {
    // Extract the data from the request body

    if (!data) {
      throw new Error("Request body is missing");
    }

    const shipping = data.shipping;
    const billing = data.billing;

    const email = shipping.Email || billing.Email;
    console.log(email)

    const emailResponse = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for buying with us',
      react: <EmailTemplate firstName="MINCA" shipping={shipping} billing={billing} />,
    });

    return NextResponse.json({ message: "Email sent", emailResponse }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export const EmailTemplate = ({
  firstName,
  shipping,
  billing
}) => (
  <div>
    <h1>Welcome to {firstName}</h1>
    <h2>Shipping Information:</h2>
    <p>First Name: {shipping.Nombre}</p>
    <p>Last Name: {shipping.Apellido}</p>
    <p>Address 1: {shipping.Direccion1}</p>
    <p>Address 2: {shipping.Direccion2}</p>
    <p>City: {shipping.Ciudad}</p>
    <p>Country: {shipping.Pais}</p>
    <p>State: {shipping.Estado}</p>
    <p>Postcode: {shipping.Codigopostal}</p>
    <p>Email: {shipping.Email}</p>
    <p>Phone: {shipping.Telefono}</p>
    <p>Company: {shipping.Empresa}</p>
    <p>Numero Identificacion: {shipping.NumeroIdentificacion}</p>
    <p>Name Receiver: {shipping.name_receiver}</p>
    <p>Phone Receiver: {shipping.phone_receiver}</p>

    <h2>Billing Information:</h2>
    <p>First Name: {billing.Nombre}</p>
    <p>Last Name: {billing.Apellido}</p>
    <p>Address 1: {billing.Direccion1}</p>
    <p>Address 2: {billing.Direccion2}</p>
    <p>City: {billing.Ciudad}</p>
    <p>Country: {billing.Pais}</p>
    <p>State: {billing.Estado}</p>
    <p>Postcode: {billing.Codigopostal}</p>
    <p>Email: {billing.Email}</p>
    <p>Phone: {billing.Telefono}</p>
    </div>
)