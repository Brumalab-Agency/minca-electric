import create from "zustand";

const useShowroomStore = create((set) => ({
  selectedShowroom: "",
  shippingCharge: 0,
  setSelectedShowroom: (selectedOption, charge) =>
    set({
      selectedShowroom: selectedOption,
      shippingCharge: charge,
    }),
  setShippingCharge: (charge) => set({ shippingCharge: charge }),
}));

export default useShowroomStore;