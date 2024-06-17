import create from "zustand";

const useEmailData = create((set) => ({
  products: [],
  clientData: {},
  setProducts: (products) =>
  set({
    products: products,
  }),
  setClientData: (clientData) =>
    set({
        clientData: clientData,
    }),
}));

export default useEmailData;