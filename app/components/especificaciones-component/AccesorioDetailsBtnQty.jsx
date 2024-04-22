import React, { useContext } from 'react'
import { BtnQty } from './BtnQty'
import { AppContext } from '../context/Context';

const AccesorioDetailsBtnQty = () => {
    const [cart, setCart] = useContext(AppContext);
    console.log(cart);
  const { cartItems, totalPrice, totalQty } = cart || {};

  console.log(cartItems);

  return (
    <div>
        <BtnQty item={cartItems}/>
    </div>
  )
}

export default AccesorioDetailsBtnQty