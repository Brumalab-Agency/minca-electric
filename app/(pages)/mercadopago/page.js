"use client";
import BookingWidget from "@/components/simplybook/SimplyBook";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

export const Mercadopago = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-f06eabcb-7ef3-41ee-a379-e532b2658022", {
    locale: "es-CO",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/apimercadopago",
        {
          title: "Una Card",
          quantity: 1,
          price: 100,
        },
      );
      const { id } = response.data;

      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
      <div>
        <BookingWidget/>
            <div className="m-auto h-auto w-[300px]">
        <a href="#" class="group relative block bg-[#111]">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div class="relative p-4 sm:p-6 lg:p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>
            <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p class="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                  perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
        <button
          onClick={handleBuy}
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Comprar
        </button>
        {preferenceId && (
          <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }} />
        )}
            </div>
      </div>
  );
};

export default Mercadopago;