import React, {useState, createContext, useEffect} from 'react'

export const RecetasContext = createContext()

export const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([])
  const [recetasApi, setRecetasApi] = useState({
    nombre: '',
    categoria: ''
  })
  useEffect( () => {
    console.log( recetasApi.nombre)
    if( recetasApi.nombre === '' ) {return}
    
    const obtenerRecetas = async () => {
      const API = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${recetasApi.nombre}&c=${recetasApi.categoria}`
      const respuesta = await fetch(API)
      const dataa = await respuesta.json()
      setRecetas(dataa.drinks)
    }
    obtenerRecetas()

  }, [recetasApi] )
  return (
    <RecetasContext.Provider
      value={{
        recetas, setRecetasApi
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  )
}
