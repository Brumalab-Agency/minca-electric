// store/dataorder.store.js
import { create } from 'zustand';

const useEmailData = create((set) => ({
  clientData: {},
  products: [],
  setClientData: (data) => set({ clientData: data }),
  setProducts: (data) => set({ products: data }),
}));

export default useEmailData;
