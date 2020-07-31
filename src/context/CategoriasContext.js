import React, {useEffect, useState, createContext} from 'react'

export const CategoriasContext = createContext()


export const CategoriasProvider = (props) => {

  const [categorias, setCategorias] = useState([])

  useEffect( () => {
    const llamadoApi = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      const category = await fetch(URL)
      const data = await category.json()
      setCategorias(data.drinks)
    }
    llamadoApi()
  }, [])

  return (
    <CategoriasContext.Provider
      value = {{
        categorias, setCategorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  )
}




// import React,{useState, createContext} from 'react'

// export const CategoriasContext = createContext()

// export const CategoriasProvider = (props) => {

//   const [categorias, setCategorias] = useState([])
  

//   return (
//     <CategoriasContext.Provider
//       value={{
//        categorias, setCategorias
//       }}
//     >
//       {props.children}
//     </CategoriasContext.Provider>
//   )
// }




















