export async function sendEmail(dataString, productsString) {
    const url = `/api/send`;
    let dataObject = JSON.parse(dataString);
    let products = JSON.parse(productsString);
    const data = {
        ...dataObject,
        ...products
    }

    console.log(data)

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Correctly set Content-Type header
            },
            body: JSON.stringify(data), // Send merged data as the request body
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        // Optionally handle the response
        const responseData = await response.json();
        console.log('Email sent successfully:', responseData);

        return responseData; // Return response data directly (not wrapped in a Promise)
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Re-throw the error to handle it upstream
    }
}
