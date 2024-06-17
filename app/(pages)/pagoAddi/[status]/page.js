import React from "react";

const PaymentPage = () => {
    // Get the URL parameter for order status
    const urlParams = new URLSearchParams(window.location.search);
    const orderStatus = urlParams.get("status");

    // Check if the order status is "completed"
    if (orderStatus === "completed") {
        // Render the payment success page
        return <h1>Payment Successful</h1>;
    } else {
        // Render the payment fail page
        return <h1>Payment Failed</h1>;
    }
};

export default PaymentPage;