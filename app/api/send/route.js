import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const data = searchParams.get('data');
  console.log(data)
  try {
    // Extract the data from the request body

    if (!data) {
      throw new Error("Request body is missing");
    }

    const email = data.shipping.email || data.billing.email;

    if (!email) {
      throw new Error("Email address not found in data");
    }

    const emailResponse = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ["jehp01104006@gmail.com"],//[email],
      subject: 'Thank you for buying with us',
      react: <EmailTemplate firstName="MINCA" shipping={data.shipping} billing={data.billing} />,
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
      <p>First Name: {shipping.first_name}</p>
      <p>Last Name: {shipping.last_name}</p>
      <p>Address 1: {shipping.address_1}</p>
      <p>Address 2: {shipping.address_2}</p>
      <p>City: {shipping.city}</p>
      <p>Country: {shipping.country}</p>
      <p>State: {shipping.state}</p>
      <p>Postcode: {shipping.postcode}</p>
      <p>Email: {shipping.email}</p>
      <p>Phone: {shipping.phone}</p>
      <p>Company: {shipping.company}</p>
      <p>Numero Identificacion: {shipping.NumeroIdentificacion}</p>
      <p>Name Receiver: {shipping.name_receiver}</p>
      <p>Phone Receiver: {shipping.phone_receiver}</p>
  
      <h2>Billing Information:</h2>
      <p>First Name: {billing.first_name}</p>
      <p>Last Name: {billing.last_name}</p>
      <p>Address 1: {billing.address_1}</p>
      <p>Address 2: {billing.address_2}</p>
      <p>City: {billing.city}</p>
      <p>Country: {billing.country}</p>
      <p>State: {billing.state}</p>
      <p>Postcode: {billing.postcode}</p>
      <p>Email: {billing.email}</p>
      <p>Phone: {billing.phone}</p>
      <p>Company: {billing.company}</p>
      <p>Numero Identificacion: {billing.NumeroIdentificacion}</p>
      <p>Name Receiver: {billing.name_receiver}</p>
      <p>Phone Receiver: {billing.phone_receiv}</p>
    </div>
);
