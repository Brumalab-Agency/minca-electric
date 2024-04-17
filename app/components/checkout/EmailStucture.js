const sendEmailWithBill = async (formData) => {
    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ formData }),
        });

        if (response.ok) {
            console.log('Email sent successfully');
        } else {
            console.error('Error sending email:', response.statusText);
            throw new Error('Error sending email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};
