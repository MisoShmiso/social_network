import { createContext, useContext } from "react";

export const StoreContext = createContext(null);

export const useStore = () => {
  const { store } = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return store;
};
