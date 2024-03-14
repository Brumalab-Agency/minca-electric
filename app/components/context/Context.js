"use client"

import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ( {children} ) => {
	
	const [ cart, setCart ] = useState( null );
	
	useEffect(() => {
		// Verificar si localStorage está disponible
		const isLocalStorageAvailable = typeof window.localStorage !== 'undefined';
	  
		if (isLocalStorageAvailable) {
		  const cartData = localStorage.getItem('next-cart');
		  const cart = JSON.parse(cartData);
		  if (cart) {
			setCart(cart);
		  }
		}
	  }, []);
	  
	  useEffect(() => {
		const handleBeforeUnload = () => {
		  localStorage.setItem('next-cart', JSON.stringify(cart));
		};
	  
		const handleUnload = () => {
		  localStorage.setItem('next-cart', JSON.stringify(cart));
		};
	  
		window.addEventListener('beforeunload', handleBeforeUnload);
		window.addEventListener('unload', handleUnload);
	  
		return () => {
		  window.removeEventListener('beforeunload', handleBeforeUnload);
		  window.removeEventListener('unload', handleUnload);
		};
	  }, [cart]);
	
	return (
		<AppContext.Provider value={ [ cart, setCart ] }>
			{ children }
		</AppContext.Provider>
	);
};