import React, { createContext, useState, useContext } from "react";

const PetsContext = createContext();

export function PetsProvider({ children }) {
  const [pets, setPets] = useState();

  return (
    <PetsContext.Provider
      value={{
        pets,
        setPets,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
}

export function usePets() {
  const context = useContext(PetsContext);
  const { pets, setPets } = context;
  return { pets, setPets };
}
