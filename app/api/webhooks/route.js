/* import axios from 'axios';
import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const topic = url.searchParams.get('topic');
    const id = url.searchParams.get('id');
    if (topic === 'payment' && id) {
      const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${process.env.MERCADOPAGO_SECRET_KEY}`,
        },
      });
      const payment = response.data;

      if(payment.status === 'approved') {
        const data = {
          status: "completed"
        };
        const idOrderWoocomerce = payment.metadata.id_complete;
        await api.put(`orders/${idOrderWoocomerce}`, data);
        
      }
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error en el webhook:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
} */
import axios from 'axios';
import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
const nodemailer = require('nodemailer');

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const topic = url.searchParams.get('topic');
    const id = url.searchParams.get('id');
    if (topic === 'payment' && id) {
      const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${process.env.MERCADOPAGO_SECRET_KEY}`,
        },
      });
      const payment = response.data;

      if(payment.status === 'approved') {
        const data = {
          status: "completed"
        };
        const idOrderWoocommerce = payment.metadata.id_complete;
        
        // Fetch order details using the WooCommerce API
        const orderResponse = await api.get(`orders/${idOrderWoocommerce}`);

        if (orderResponse.status === 200) {
          const orderData = orderResponse.data;

          // Create transporter object for sending email
          const transporter = nodemailer.createTransport({
            service: 'Gmail', // Specify your email service provider
            auth: {
              user: 'your-email@gmail.com', // Your email address
              pass: 'your-email-password' // Your email password
            }
          });

          // Construct HTML content for email
          const htmlContent = `
            <h1>Invoice for Order ${orderData.id}</h1>
            <p>Name: ${orderData.billing.first_name} ${orderData.billing.last_name}</p>
            <p>Address: ${orderData.billing.address_1}</p>
            <p>Department: ${orderData.billing.department}</p>
            <p>City: ${orderData.billing.city}</p>
            <p>Phone: ${orderData.billing.phone}</p>
            <p>Email: ${orderData.billing.email}</p>
            <p>Total: ${orderData.total}</p>
          `;

          // Define email options
          const mailOptions = {
            from: 'your-email@gmail.com', // Sender's email address
            to: orderData.billing.email, // Recipient's email address
            subject: 'Invoice for Your Order', // Subject line
            html: htmlContent // HTML content of the email
          };

          // Send email
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error occurred while sending email:', error);
            } else {
              console.log('Email sent successfully:', info.response);
            }
          });
        }
      }
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error in the webhook:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
