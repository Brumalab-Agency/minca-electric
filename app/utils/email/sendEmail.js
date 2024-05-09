export default async function sendEmail() {
    const url = `/api/data-email`;

    try {
        // Make a GET request to fetch data and products
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data and products');
        }

        const responseData = await response.json();

        // Send a POST request with merged data to the /api/send route
        const sendResponse = await fetch('/api/send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(responseData.data),
        });

        if (!sendResponse.ok) {
            throw new Error('Failed to send email');
        }

        const sendResponseData = await sendResponse.json();
        console.log('Email sent successfully:', sendResponseData);

        return sendResponseData;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
