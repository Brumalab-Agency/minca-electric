import create from "zustand";

const useShowroomStore = create((set) => ({
  selectedShowroom: "",
  shippingCharge: 0,
  setSelectedShowroom: (selectedOption) => set({ selectedShowroom: selectedOption }),
  setShippingCharge: (charge) => set({ shippingCharge: charge }), 
}));

export default useShowroomStore;
