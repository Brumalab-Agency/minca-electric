import { getData } from "@/components/checkout/CheckoutForm";
import { getProducts } from "@/components/checkout/CheckoutForm";

export async function sendEmail() {
    const data = getData();
    const products = getProducts(); 
    console.log("data", data);
    console.log("products", products);
    const dataObject = {
        ...data,
        ...products
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataObject),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        const responseData = await response.json();
        console.log('Email sent successfully:', responseData);

        return responseData;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
