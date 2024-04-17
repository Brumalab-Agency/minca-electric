import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { formData } = req.body;

        // Create a Nodemailer transporter
        let transporter = nodemailer.createTransport({
            // Provide your email service configuration here
            service: 'your_email_service_provider', // e.g., 'gmail'
            auth: {
                user: 'your_email@example.com',
                pass: 'your_email_password'
            }
        });

        // Build the email content
        let mailOptions = {
            from: 'your_email@example.com',
            to: formData.email, // Assuming email is a field in your form data
            subject: 'Your Bill',
            html: `
                <p>Hello ${formData.firstName},</p>
                <p>Here is your bill:</p>
                <p>Amount: ${formData.amount}</p>
                <!-- Add more bill details here as needed -->
            `
        };

        // Send the email
        try {
            let info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ', info.response);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email: ', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
