import create from "zustand";

const useDepartmentStore = create((set) => ({
  selectedDepartment: "",
  setSelectedDepartment: (selectedOption) =>
    set({
        selectedDepartment: selectedOption,
    }),
}));

export default useDepartmentStore;