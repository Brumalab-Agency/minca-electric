import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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
      to: [email, process.env.EMAIL_ADDRESS_CLIENT_SERVICEMINCA, process.env.EMAIL_ADDRESS_CLIENT_BRUMA],
      subject: 'Thank you for buying with us',
      react: <EmailTemplate firstName="MINCA" shipping={shipping} billing={billing} cartItems={data.cartItems} totalPrice={data.totalPrice}/>,
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
  billing,
  cartItems,
  totalPrice
}) => (
  <div>
    <h1>Bienvenido a {firstName}</h1>
    <h2>Order details</h2>
    {/* Iterate over each item in cartItems */}
    {cartItems.map(item => (
      <div key={item.key}>
        <h3>Product Details:</h3>
        <p>Name: {item.data.name}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.data.price}</p>
        <p>Subtotal: {item.line_total}</p>
        <p>Image: <img src={item.data.images[0].src} alt={item.data.images[0].alt} /></p>
      </div>
    ))}

    <h2>Total Price: {totalPrice}</h2>
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
    {/* <p>City: {billing.Ciudad}</p> */}
    <p>Country: {billing.Pais}</p>
    <p>State: {billing.Estado}</p>
    <p>Postcode: {billing.Codigopostal}</p>
    <p>Email: {billing.Email}</p>
    <p>Phone: {billing.Telefono}</p>
    </div>
)