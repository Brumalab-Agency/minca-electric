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
