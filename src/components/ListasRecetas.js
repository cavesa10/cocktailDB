import React, {useContext} from 'react'
import {RecetasContext} from '../context/RecetasContext'

export const ListasRecetas = () => {

  const {recetas} = useContext(RecetasContext)
  
  return (
    <h1>Listado</h1>

  )
}
