import { create } from "zustand"

const useCentralStore = create((set) => ({
  currentTheme: "dark",
  setCurrentTheme: (theme) => set({ currentTheme: theme }),
}))

export default useCentralStore
