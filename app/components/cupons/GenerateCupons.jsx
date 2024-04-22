import { useState } from 'react';
import axios from 'axios';

const GenerateCupons = () => {
  const [couponCode, setCouponCode] = useState('');

  const generate_random_code = (length_code) => {
    let random_code = '';
    const regex = /^[a-zA-Z0-9]+$/; // Regular expression for alphanumeric characters

    for (let i = 0; i < length_code; i++) {
        let char;
        do {
            char = String.fromCharCode(Math.floor(Math.random() * 128)); // Generate a random character code
        } while (!char.match(regex)); // Loop until a valid alphanumeric character is generated
        random_code += char;
    }

    return "MINCA_" + random_code;
  };

  const generateCoupon = async () => {
    const data = {
      code: generate_random_code(5),
      discount_type: "percent",
      amount: "10",
      individual_use: true,
      exclude_sale_items: true,
      minimum_amount: "100.00",
      usage_limit: 1,
    };

    try {
      const response = await axios.post('/api/create-cupons', data);
      if (response.data.success) {
        setCouponCode(response.data.couponCode); // Corrected the access to coupon code
      } else {
        console.error('Error creating coupon:', response.data.error);
      }
    } catch (error) {
      console.error('Error creating coupon:', error);
    }
  };

  return (
    <div>
      <button onClick={generateCoupon}>Generate Coupon</button>
      {couponCode && <p>Coupon Code: {couponCode}</p>}
    </div>
  );
};

export default GenerateCupons;
