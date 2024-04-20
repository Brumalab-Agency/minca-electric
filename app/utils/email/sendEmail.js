import fetch from 'isomorphic-fetch';

export async function sendEmail(orderId) {
    try {
        // Make a request to the API endpoint to fetch order details
        const response = await fetch(`/api/order?orderId=${orderId}`);
        const orderDetailsData = await response.json();

        if (response.ok && orderDetailsData.success) {
            const orderDetails = orderDetailsData.orderDetails;
            const orderStatus = orderDetails.status;

            if (orderStatus !== 'Completado') {
                console.log('Order status is not "completed". Skipping email sending.');
                return;
            }

            // Read HTML email template file
            const htmlBody = 'emailTemplate.html'; // Update with your email template file

            // Create Nodemailer transporter and define email options
            // Code for sending email goes here
            const transporter = createTransport({
                host: 'https://test.mincaelectric.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'jehp01104006@gmail.com',
                    pass: 'Juanes_08032004',
                },
            });

            const mailOptions = {
                from: 'jehp01104006@gmail.com',
                to: orderDetails.billing.email || orderDetails.shipping.email,
                subject: 'Your order is completed',
                html: injectOrderDetails(htmlBody, orderDetails),
            };

            try {
                const info = await transporter.sendMail(mailOptions);
                console.log('Email sent successfully: ', info.messageId);
            } catch (error) {
                console.error('Error sending email: ', error);
            }
        } else {
            console.error('Error fetching order details: ', orderDetailsData.error);
        }
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}

// Function to inject order details into the email body
function injectOrderDetails(htmlBody, orderDetails) {
    // Replace placeholders in HTML body with actual order details
    const replacedHtmlBody = htmlBody
        .replace('{{orderId}}', orderDetails.id)
        .replace('{{status}}', orderDetails.status)
        .replace('{{customerName}}', `${orderDetails.billing.first_name} ${orderDetails.billing.last_name}`);
    // Add more replacements as needed

    return replacedHtmlBody;
}

// Uncomment the line below to trigger the email sending when this module is executed
// sendEmail('your_order_id');
