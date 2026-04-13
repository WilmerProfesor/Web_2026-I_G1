import React from 'react'
import './Footer.css'

//Props: son parámetros que se le pasan a un componente 
// para que este pueda personalizar su contenido o comportamiento. 
// Son inmutables, es decir, no pueden ser modificados por el componente que los recibe.
// Se utilizan para pasar datos desde un componente padre a un componente hijo.

//const Footer = (props) => {
const Footer = (props) => {
    const { contador } = props;
// const Footer = ({ contador }) => {
  return (
    <footer>
        {/* <p>Copyright © 2024 {props.contador}</p> */}
        <p>Copyright © 2024 {contador}</p>
    </footer>
  )
}

export default Footer

