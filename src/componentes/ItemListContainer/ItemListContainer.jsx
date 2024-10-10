import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false)

    const {idcat} = useParams()

    useEffect(()=> {
        setLoading(true)
        const misProductos = idcat ? query(collection(db, "Productos"), where("idcat", "==", idcat)) : (collection(db,"Productos"))

        getDocs(misProductos)
        .then (res => {
            
            const nuevosProductos = res.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id , ...data}
            })
            setProductos(nuevosProductos)
        })
        .catch(error => console.log(error))
        .finally(()=>{            
            setLoading(false)
        })
    }, [idcat])
    
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Mis Productos</h2>
            {loading ? <Loader/> : <ItemList productos={productos}/>}
        </>
    )
}

export default ItemListContainer