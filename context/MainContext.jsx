import { createContext, useRef } from "react";

export const MainContext = createContext(null);

export const MainContextProvider = ({ children }) => {
  const scrollRef = useRef();
  return (
    <MainContext.Provider value={{ scrollRef }}>
      {children}
    </MainContext.Provider>
  );
};
