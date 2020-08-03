import React, {useState, useEffect, createContext} from 'react'

export const ModalContext = createContext()

export const ModalProvider = (props) => {
  
  const [idReceta, setIdReceta] = useState(null)
  const [modalReceta, setModalReceta] = useState({})
  useEffect(() => {
    if (idReceta === null) {return}
    const recetaDetail = async () => {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
      const respuesta = await fetch(URL)
      const data = await respuesta.json()
      setModalReceta(data.drinks[0])
    }
    recetaDetail()
    
  }, [idReceta])
  
  return (
    <ModalContext.Provider
      value = {{
        modalReceta,
        setIdReceta,
        setModalReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
