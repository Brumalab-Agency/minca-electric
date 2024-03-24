import { initMercadoPago } from '@mercadopago/sdk-react';

export function initializeMercadoPago() {
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY);
}
