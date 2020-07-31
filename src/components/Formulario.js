import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { v4 as uuidv4 } from "uuid";

export const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);
  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Buscar por Ingrediente"
          />
        </div>
        <div className="col-md-4">
          <select name="" id="" className="form-control">
            <option value="">-- Selecciona Catgoría --</option>
            {categorias.map((categoria) => (
              <option key={uuidv4()} value={categoria.strCategory}>
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
    </form>
  );
};
