import axios from 'axios';

export async function applyDiscount(total, couponCode) {
    try {
        const response = await axios.get('/api/get-coupon');
        const coupons = response.data.coupons;
        console.log(coupons)

        const coupon = coupons.find(coupon => coupon.code === couponCode);
        if (!coupon) {
            throw new Error('Coupon not found');
        }


        let discountedTotal = total;
        if (coupon.discount_type === 'percent') {
            const discountAmount = (total * coupon.amount) / 100;
            discountedTotal -= discountAmount;
        } else {
            discountedTotal -= coupon.amount;
        }

        return discountedTotal;
    } catch (error) {
        const errorMessage = error.response ? error.response.data.error : error.message;
        throw new Error(errorMessage);
    }
}
