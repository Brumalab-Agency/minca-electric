import axios from 'axios';

export async function applyDiscount(couponCode, cart) {
    try {
        const response = await axios.get('/api/get-coupon');
        const coupons = response.data.coupons;
        const coupon = coupons.find(coupon => coupon.code === couponCode);
        if (!coupon) {
            throw new Error('Coupon not found');
        }
        cart.totalPrice = 0;

        cart.cartItems.forEach((item) => {
            if (coupon.product_ids.includes(item.product_id)) {
                if (coupon.discount_type === 'percent') {
                    const discountAmount = (item.line_subtotal * coupon.amount) / 100;
                    item.line_subtotal -= discountAmount;
                    item.line_total -= discountAmount;
                } else {
                    throw new Error("Cupon solo valido para accesoriso")
                }
            }
            cart.totalPrice += item.line_subtotal
        });
        return cart;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.error : error.message;
        throw new Error(errorMessage);
    }
}

export async function getDiscountRate(couponCode) {
    try {
        const response = await axios.get('/api/get-coupon');
        const coupons = response.data.coupons;
        const coupon = coupons.find(coupon => coupon.code === couponCode);
        return coupon.amount;
    }
    catch (error) {
        const errorMessage = error.response ? error.response.data.error : error.message;
        throw new Error(errorMessage);
    }
}