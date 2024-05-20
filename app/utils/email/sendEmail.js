import axios from 'axios';

export async function sendEmail(input, cart, id) {
    //NO SUBIR ESTOS CAMBIOS
    const url = `https://g2ci6uygwogyqzngb42v4mtqzq.srv.us/api/send`;
    const dataObject = JSON.parse(input);
    const products = JSON.parse(cart);
    const data = {
        ...dataObject,
        products: products,
        id: id,
    }
    try {
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json", // Correctly set Content-Type header
            }
        });

        // Check if the request was successful
        if (response.status !== 200) {
            throw new Error('Failed to send email');
        }

        // Optionally handle the response
        console.log('Email sent successfully:', response.data);

    } catch (error) {
        console.error('Error sending email:', error);
    }
}
