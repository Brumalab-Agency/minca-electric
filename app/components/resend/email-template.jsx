import * as React from 'react';



export const EmailTemplate = ({
  firstName,
  shipping,
  billing,
  products,
}) => (
  <div>
    <h1>Bienvenido a {firstName}</h1>
    <h2>Detalles de la orden</h2>
    {/* Iterate over each item in products */}
    {products.map((product, index) => (
      <div key={index}>
        <h3>Detalles de producto:</h3>
        <p>Nombre: {product.name}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>SubPrecio: {product.price}</p>
        <p>Precio Total: {product.totalPrice}</p>
        <p>Imagen: <img src={product.image} alt={product.name} /></p>
      </div>
    ))}
    <h2>Información de envío:</h2>
    <p>Nombre Completo: {shipping.Nombre}</p>
    <p>Apellido Completo: {shipping.Apellido}</p>
    <p>Dirección cliente: {shipping.Direccion1}</p>
    <p>Dirección showroom: {shipping.Direccion2}</p>
    <p>Tipo de Vivienda: {shipping.TipoVivienda}</p>
    <p>Ciudad: {shipping.Ciudad}</p>
    <p>País: {shipping.Pais}</p>
    <p>Departamento: {shipping.Departamento}</p>
    <p>Correo: {shipping.Email}</p>
    <p>Teléfono: {shipping.Telefono}</p>
    <p>Número de Identificación: {shipping.NumeroIdentificacion}</p>
    <p>Nombre de quien recibe: {shipping.Destinatario || shipping.Quienrecibe}</p>
    <p>Teléfono de quien recibe: {shipping.TelefonoDestinatario || shipping.Receptor}</p>

    <h2>Información de facturacion:</h2>
    <p>Nombre Completo: {billing.Nombre}</p>
    <p>Apellido Completo: {billing.Apellido}</p>
    <p>Dirección cliente: {billing.Direccion1}</p>
    <p>Dirección showroom: {billing.Direccion2}</p>
    <p>Tipo de Vivienda: {billing.TipoVivienda}</p>
    <p>Ciudad: {billing.Ciudad}</p>
    <p>País: {billing.Pais}</p>
    <p>Departamento: {billing.Departamento}</p>
    <p>Correo: {billing.Email}</p>
    <p>Teléfono: {billing.Telefono}</p>
    <p>Número de Identificación: {billing.NumeroIdentificacion}</p>
    <p>Nombre de quien recibe: {billing.Destinatario || billing.Quienrecibe}</p>
    <p>Teléfono de quien recibe: {billing.TelefonoDestinatario || billing.Receptor}</p>
    </div>
)
