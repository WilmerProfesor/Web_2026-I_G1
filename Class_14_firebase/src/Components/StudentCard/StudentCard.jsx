import React from 'react'
import './StudentCard.css';

const StudentCard = (props) => {
  return (
    <div key={props.item.id} className='cardStudent'>        
        <div className='imgStudent'>
          <img src={props.item.img} alt="" />       
          <p className='state'>{props.item.estado?"Activo":"Inactivo"}</p>
        </div>
        <div className='infoStudent'>
          <p className='title'>{props.item.nombre + " " + props.item.apellido}</p>          
          <p>{props.item.descripcion}</p>
          <div className='contactStudent'>
            <p style={{maxWidth: "50%"}}>DIRECIÓN DE CORREO: <span style={{color:"black"}}>{props.item.correo}</span></p>
            <p style={{maxWidth: "50%"}}>NUMERO DE CELULAR: <span style={{color:"black"}}>{props.item.celular}</span></p>           
          </div>
        </div>
      </div>
  )
}
export default StudentCard;
