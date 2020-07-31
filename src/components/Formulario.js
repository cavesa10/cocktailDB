import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

export const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const [error, setError] = useState(false)

  const { categorias } = useContext(CategoriasContext);
  const { setBusquedaRecetas } = useContext(RecetasContext);

  const handleOnChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault()
    if(busqueda.nombre.trim() === "" || busqueda.categoria.trim() === "" ){ 
      setError(true) 
      return 0
    }
    setError(false)

    setBusquedaRecetas(busqueda)
  }

  return (
    <form onSubmit={handleSubmit} className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={handleOnChange}
          >
            <option value="">-- Selecciona Catgoría --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
      {error ? <p className="text-center mt-3 alert-danger p-1" >Todos los campos son obligatorio</p>: null}
    </form>
  );
};
