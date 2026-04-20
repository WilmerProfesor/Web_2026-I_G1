import { useState, useEffect } from 'react'
import './App.css'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { db } from './Firebase/config.js';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "Estudiantes", "id1");
      const docSnap = await getDoc(docRef);       
      if (docSnap.exists()) {
        setData(docSnap.data());
        console.log(docSnap.data());
        
      } else {
        console.log("No se encontró el documento!");
      }
    }
    getData();
  }, [])

  
  return (
    <>
      <h1>Hi world</h1>
      {data && (
        <div>
          <p>Nombre: {data.Nombre}</p>
          <p>Edad: {data.Edad}</p>
          <p>Promedio: {data.Promedio}</p>  
          <p>Sexo: {data.Sexo?"Masculino":"Femenino"}</p>          
        </div>
      )}
    </>
  )
}

export default App
