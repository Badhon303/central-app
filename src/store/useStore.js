import { create } from "zustand"

const useStore = create((set) => ({
  currentImageIndex: 0,
  setCurrentImageIndex: (index) => set({ currentImageIndex: index }),
}))

export default useStore
