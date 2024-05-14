import * as React from 'react';



export const EmailTamplateContact = ({
    Data
}) => (
    <div>
        Nueva solicitud de contacto
        <p>Nombre: {Data.name}</p>
        <p>Correo: {Data.email}</p>
        <p>Identificacion: {Data.identification}</p>
        <p>Fecha de compra: {Data.purchaseDate}</p>
        <p>Numero de factura: {Data.billNumber}</p>
        <p>Asunto: {Data.subject}</p>
        <p>Mensaje: {Data.message}</p>
    </div>
)