import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { sendEmail } from '@/utils/email/sendEmail';
import axios from 'axios';

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function GET(request) {
  return NextResponse.json({ message: 'Soy el servidor webhook' });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const authorizationHeader = request.headers.get('authorization');
    if (body.status === 'APPROVED') {
      if (authorizationHeader !== process.env.AUTH_ADDI_WEBHOOK) {
        return NextResponse.json({ error: 'Invalid credentials, request not authorized' }, { status: 401 });
      }
      
      const dataWoocommerce = {
        status: "completed"
      };
      const idOrderWoocomerce = body.orderId;
      await api.put(`orders/${idOrderWoocomerce}`, dataWoocommerce);
      const dataOrder = await fetch(`https://www.mincaelectric.com/api/orders-complete?order_id=${idOrderWoocomerce}`, {
        method: 'GET',
      });
      const products = await fetch(`https://www.mincaelectric.com/api/products-complete?order_id=${idOrderWoocomerce}`, {
        method: 'GET',
      });
      const clientData = await dataOrder.json();
      const productsData = await products.json();

      const filledData = clientData.data[0][0];
      const dataClient = {
        billing: {
          Nombre: filledData.first_name,
          Apellido: filledData.last_name,
          Direccion1: filledData.principal_address,
          Direccion2: filledData.showroom_address,
          Ciudad: filledData.city,
          Departamento: filledData.region,
          TipoVivienda: filledData.type_of_housing,
          Pais: filledData.coutry,
          Email: filledData.email,
          Telefono: filledData.phone,
          Empresa: filledData.company,
          EmailEmpresa: filledData.email_company,
          RazonSocial: filledData.business_name,
          Nit: filledData.nit,
          TelefonoTrabajo: filledData.phone_company,
          NumeroIdentificacion: filledData.identification,
          Barrio: filledData.neighborhood,
          Destinatario: filledData.addressee,
          TelefonoDestinatario: filledData.recipient_phone,
          errors: null,
          numeroIdentificacion: filledData.identification,
          metodo_de_pago: filledData.payment_method,
        },
        shipping: {
          Nombre: filledData.first_name,
          Apellido: filledData.last_name,
          Direccion1: filledData.principal_address,
          Direccion2: filledData.showroom_address,
          Ciudad: filledData.city,
          Departamento: filledData.region,
          TipoVivienda: filledData.type_of_housing,
          Pais: filledData.coutry,
          Email: filledData.email,
          Telefono: filledData.phone,
          Empresa: filledData.company,
          EmailEmpresa: filledData.email_company,
          RazonSocial: filledData.business_name,
          Nit: filledData.nit,
          TelefonoTrabajo: filledData.phone_company,
          NumeroIdentificacion: filledData.identification,
          Barrio: filledData.neighborhood,
          Destinatario: filledData.addressee,
          TelefonoDestinatario: filledData.recipient_phone,
          errors: null,
          numeroIdentificacion: filledData.identification,
          metodo_de_pago: filledData.payment_method,
        }
      };
      productsData.data.forEach(product => {
        product.difference = product.difference.toString();
        product.price = product.price.toString();
        product.quantity = product.quantity.toString();
        product.shippingPrice = product.shippingPrice.toString();
        product.totalPrice = product.totalPrice.toString();
      });
      await sendEmail(JSON.stringify(dataClient), JSON.stringify(productsData.data), idOrderWoocomerce);
      return NextResponse.json({ body: body }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Payment not approved' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error en el webhook:', error);
    return NextResponse.json({ error: 'Failed Request' }, { status: 500 });
  }
}