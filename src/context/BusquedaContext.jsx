import { createContext, useContext, useState } from "react";

const BusquedaContext = createContext();

export const BusquedaProvider = ({ children }) => {

  const [busqueda, setBusqueda] = useState('');

  return (
    <BusquedaContext.Provider value={{ busqueda, setBusqueda }}>
      {children}
    </BusquedaContext.Provider>
  );
};

export const useBusqueda = () => {
  const context = useContext(BusquedaContext);
  if (!context) {
    throw new Error("useBusqueda debe usarse dentro de un BusquedaProvider");
    }
    
  return context;
};
