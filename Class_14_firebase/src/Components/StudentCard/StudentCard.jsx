import React from 'react'
import './StudentCard.css';

const StudentCard = (props) => {
  return (
    <div key={props.item.id} className='cardStudent'>
        <p>Nombre: {props.item.Nombre}</p>
        <p>Edad: {props.item.Edad}</p>
        <p>Promedio: {props.item.Promedio}</p>
        <p>Sexo: {props.item.Sexo ? "Masculino" : "Femenino"}</p>
      </div>
  )
}
export default StudentCard;
