import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 500,
    display: 'block',
  },
  header: {
    padding: '12px 0',
    borderBottom: '1px solid darkgrey'
    },
  content: {
  padding: "12px 0",
  overflow: 'auto'
  }
}));

export const Receta = ({ receta }) => {
  // config del modal del material-ui

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { strDrink, strDrinkThumb, idDrink } = receta;

  const { modalReceta, setIdReceta, setModalReceta } = useContext(ModalContext);

  const {strInstructions} = modalReceta

  const handleClick = () => {
    setIdReceta(idDrink);
  };

  // Muestra y formatea los ingredientes 

  const mostrarIngredientes = modalReceta => {
    let ingredientes = []
    for (let i = 1; i < 16; i++) {
      if (modalReceta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={modalReceta[`strIngredient${i}`]} >{ modalReceta[`strIngredient${i}`]} - { modalReceta[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h3 className="card-header">{strDrink}</h3>
        <img className="card-img-top" src={strDrinkThumb} alt={`${strDrink}`} />
        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => {
              handleOpen();
              handleClick();
            }}
          >
            Ver Receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setIdReceta(null);
              setModalReceta({})
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{strDrink}</h2>
              <h3 className="mt-4" >Instrucciones</h3>
              <p>{strInstructions}</p>
              <img src={strDrinkThumb} alt={strDrink} className="img-fluid my-4"/>
              <h3>Ingredientes y cantidades</h3>
              <ul>
                {mostrarIngredientes(modalReceta)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
