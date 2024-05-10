import { useState } from 'react';
import axios from 'axios';

const GenerateCupons = () => {
  const [couponCode, setCouponCode] = useState('');

  /* const generate_random_code = (length_code) => {
    let random_code = '';
    const regex = /^[a-zA-Z0-9]+$/; // Regular expression for alphanumeric characters

    for (let i = 0; i < length_code; i++) {
        let char;
        do {
            char = String.fromCharCode(Math.floor(Math.random() * 128)); // Generate a random character code
        } while (!char.match(regex)); // Loop until a valid alphanumeric character is generated
        random_code += char;
    }

    return "#MINCA15";
  }; */

  const generateCoupon = async () => {
    const data = {
      code: "#MINCA15",
      discount_type: "percent",
      amount: "15",
      description: "Cupon para Accesorios",
      excluded_product_ids: [435, 419, 1867, 952]
    };

    try {
      const response = await axios.post('/api/create-coupon', data);
      if (response.data.success) {
        setCouponCode(response.data.couponCode);
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