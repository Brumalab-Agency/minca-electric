import { Header } from '@/components/home/Header'
import CheckoutForm from '@/components/checkout/CheckoutForm'
import { WOOCOMMERCE_COUNTRIES_ENDPOINT } from '@/utils/cart/constants/endpoint'
import axios from 'axios';

export const Checkout = async() => {
    const { data: countries } = await axios.get( WOOCOMMERCE_COUNTRIES_ENDPOINT );


  return (
    <div className='px-[48px] pt-[100px]'>
         <CheckoutForm countriesData={countries}/>
    </div>
  )
}

export default Checkout