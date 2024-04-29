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
    <h2>Detalles de la orden</h2>
    {/* Iterate over each item in cartItems */}
    {cartItems.map(item => (
      <div key={item.key}>
        <h3>Detalles de producto:</h3>
        <p>Nombre: {item.data.name}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio: {item.data.price}</p>
        <p>SubPrecio: {item.line_total}</p>
        <p>Imagen: <img src={item.data.images[0].src} alt={item.data.images[0].alt} /></p>
      </div>
    ))}

    <h2>Precio total: {totalPrice}</h2>
    <h2>Información de envío:</h2>
    <p>Nombre Completo: {shipping.Nombre}</p>
    <p>Apellido Completo: {shipping.Apellido}</p>
    <p>Dirección cliente: {shipping.Direccion1}</p>
    <p>Dirección showroom: {shipping.Direccion2}</p>
    <p>Ciudad: {shipping.Ciudad}</p>
    <p>País: {shipping.Pais}</p>
    <p>Departamento: {shipping.Departamento}</p>
    <p>Correo: {shipping.Email}</p>
    <p>Teléfono: {shipping.Telefono}</p>
    <p>Número de Identificación: {shipping.NumeroIdentificacion}</p>
    <p>Nombre de quien recibe: {shipping.Quienrecibe}</p>
    <p>Teléfono de quien recibe: {shipping.Receptor}</p>

    <h2>Información de facturacion:</h2>
    <p>Nombre Completo: {shipping.Nombre}</p>
    <p>Apellido Completo: {shipping.Apellido}</p>
    <p>Dirección cliente: {shipping.Direccion1}</p>
    <p>Dirección showroom: {shipping.Direccion2}</p>
    <p>Ciudad: {shipping.Ciudad}</p>
    <p>País: {shipping.Pais}</p>
    <p>Departamento: {shipping.Estado}</p>
    <p>Correo: {shipping.Email}</p>
    <p>Teléfono: {shipping.Telefono}</p>
    <p>Número de Identificación: {shipping.NumeroIdentificacion}</p>
    <p>Nombre de quien recibe: {shipping.Quienrecibe}</p>
    <p>Teléfono de quien recibe: {shipping.Receptor}</p>
    </div>
)