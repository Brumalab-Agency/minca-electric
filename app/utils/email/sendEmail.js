export async function sendEmail(data) {
    const url = `/api/send`;
    try {
         const response = await fetch(url, {
             method: "POST",
             headers: {
                 "Content-Type": "application/json", // Correctly set Content-Type header
             },
             body: JSON.stringify(data), // Send data in the request body
         });
 
         // Check if the request was successful
         if (!response.ok) {
             throw new Error('Failed to send email');
         }
 
         // Optionally handle the response
         const responseData = await response.json();
         console.log('Email sent successfully:', responseData);
 
    } catch (error) {
         console.error('Error sending email:', error);
    }
 }
 