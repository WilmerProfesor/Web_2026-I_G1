import React, { useEffect, useState } from 'react'
import './ApiFireStore.css'
import { db } from '../../FireBase/config'
import { doc, getDoc } from "firebase/firestore";

const ApiFireStore = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "mascotas", "Lf6nb2jI0wloOgcYnzl9");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setData(docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        };
        fetchData();
    }, [])


    return (
        <div>
            <h2>ApiFireStore</h2>
            {data && <div className='card'>
                <p>{data.nombre}</p>
                <img src={data.img} alt={data.nombre} />
                <p>{data.color}</p>
            </div>}
        </div>
    )
}

export default ApiFireStore