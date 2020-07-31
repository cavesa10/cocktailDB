import React, { useState, createContext } from "react";

export const RecetasContext = createContext();

export const RecetasProvider = (props) => {
  const [busquedaRecetas, setBusquedaRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [recetas, setRecetas] = useState([]);

  return (
    <RecetasContext.Provider
      value={{
        setBusquedaRecetas,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};
