import axios from "axios";

export async function sendEmail(input, cart, id) {
  const url = `https://www.mincaelectric.com/api/send`;
  const dataObject = JSON.parse(input);
  const products = JSON.parse(cart);
  const data = {
    ...dataObject,
    products: products,
    id: id,
  };
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json", // Correctly set Content-Type header
      },
    });

    // Check if the request was successful
    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }

    // Optionally handle the response
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendEmailAbandoned(input, cart) {
  const url = "/api/send-abandoned-cart";
  const userData = JSON.parse(input);
  const products = JSON.parse(cart);
  const data = {
    email: userData.shipping.Email,
    products: products,
  };

  console.log(data);
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json", // Correctly set Content-Type header
      },
    });

    // Check if the request was successful
    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }

    // Optionally handle the response
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendEmailNewsLetter(email) {
  const url = "/api/news-letter-send";
 
  try {
    const response = await axios.post(url, email, {
      headers: {
        "Content-Type": "application/json", // Correctly set Content-Type header
      },
    });

    // Check if the request was successful
    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }

    // Optionally handle the response
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendEmailAddi(id) {
  const url = `https://ba1f-2800-e2-57f-f643-dd2c-a869-27cb-1c7c.ngrok-free.app/api/send`;
  const dataObject = JSON.parse(input);
  const products = JSON.parse(cart);
  const data = {
    ...dataObject,
    products: products,
    id: id,
  };
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json", // Correctly set Content-Type header
      },
    });

    // Check if the request was successful
    if (response.status !== 200) {
      throw new Error("Failed to send email");
    }

    // Optionally handle the response
    console.log("Email sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
