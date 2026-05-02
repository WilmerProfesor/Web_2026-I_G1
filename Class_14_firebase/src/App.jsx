import { useState, useEffect } from 'react'
import './App.css'

import { doc, getDoc, getFirestore } from "firebase/firestore";  // para ujn solo documento
import { collection, query, where, getDocs } from "firebase/firestore"; // para varios documentos
import { db } from './Firebase/config.js';

import StudentCard from './Components/StudentCard/StudentCard.jsx';

function App() {
  const [data, setData] = useState(null);
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    //-------- SI DESEAMOS CARGAR UN SOLO DOCUMENTO --------
    // const fetchData = async() => {
      //   const docRef = doc(db, "Estudiantes", "id1");
      //   const docSnap = await getDoc(docRef);
      
      //   if(docSnap.exists()) {
        //       console.log("Document data:", docSnap.data());
        //       setData(docSnap.data());
        //   } else {
          //       // docSnap.data() will be undefined in this case
          //     console.log("No se encontró el g¿registro!");
          //   }      
          // }
          
    //-------- SI DESEAMOS CARGAR VARIOS DOCUMENTOS --------
    const fetchData = async() => {      
      // const q = query(collection(db, "Estudiantes")); //toda la data
      const q = query(collection(db, "estudiante"), where("estado", "==", true));  // data filtrada

      const querySnapshot = await getDocs(q);
      const arrayTmp = [];
      querySnapshot.forEach((doc) => {        
        const newDoc = {id: doc.id, ...doc.data()};        
        arrayTmp.push(newDoc);        
      });
      console.log(arrayTmp);      
      setArrayData(arrayTmp);                  
    }  
    fetchData();    
  }, [])


return (
  <div className="App">    
    <h1>LISTADO DE ESTUDIANTES</h1>
    {arrayData && 
      arrayData.map((item) => (
        <StudentCard key={item.id} item={item} />       
    ))}
    {/* PARA PINTAR UN SOLO DATO */}
    {/* {data && (
      <div>
        <p>Nombre: {data.Nombre}</p>
        <p>Edad: {data.Edad}</p>
        <p>Promedio: {data.Promedio}</p>
        <p>Sexo: {data.Sexo ? "Masculino" : "Femenino"}</p>
      </div>
    )} */}
  </div>
)
}

export default App
