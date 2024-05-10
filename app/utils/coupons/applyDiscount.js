import axios from 'axios';

export async function applyDiscount(couponCode, cart) {
    try {
        const response = await axios.get('/api/get-coupon');
        const coupons = response.data.coupons;

        cart.cartItems.forEach((item) => {
            const coupon = coupons.find(coupon => coupon.code === couponCode);
            if (!coupon) {
                throw new Error('Coupon not found');
            }

            if (coupon.product_ids.includes(item.product_id)) {
                if (coupon.discount_type === 'percent') {
                    const discountAmount = (item.line_subtotal * coupon.amount) / 100;
                    item.line_subtotal -= discountAmount;
                    item.line_total -= discountAmount;
                } else {
                    throw new Error("No percentage applied")
                }
            }
        });
        console.log(cart)
        return cart;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.error : error.message;
        throw new Error(errorMessage);
    }
}
