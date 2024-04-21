import { Resend } from 'resend';

export async function sendEmail() {
    // Retrieve the Resend API key from environment variables
    const apiKey = '';

    if (!apiKey) {
        throw new Error('Resend API key is missing. Please provide the API key.');
    }

    // Create an instance of Resend with the API key
    const resend = new Resend(apiKey);
    console.log(resend)

    (async function () {
        const { data, error } = await resend.emails.send({
            from: 'jehp01104006@gmail.com',
            to: ['jehp01104006@gmail.com', 'mendoza124302@gmail.com'],
            subject: 'Hello World',
            html: '<strong>It works!</strong>',
        });

        if (error) {
            return console.error({ error });
        }

        console.log({ data });
    })();
}
