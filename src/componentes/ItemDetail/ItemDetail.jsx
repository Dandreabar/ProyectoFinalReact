import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';

const ItemDetail = ({id, nombre, precio, img, stock, detalle}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)
  const {agregarAlCarrito} = useContext(CarritoContext)
  
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
    const item = {id, nombre, precio}
    agregarAlCarrito (item, cantidad)
    toast.success("Su compra fue enviada al carrito",{autoClase:1000, theme: "dark", position: "top-right"})
  }

  return (
    <div className="container text-center" id='General' >
    <div className="row align-items-start">
      <div className="col" id='contenedorItem'  >    
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>{detalle}</p>
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
  </div>
  </div>
 </div>
  )
}

export default ItemDetail