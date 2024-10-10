import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {
 const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

 if (cantidadTotal === 0) {
    return (
        <>
          <div style={{textAlign: "center"}}>
            <h2>No hay productos en el carrito. Intenta nuevamente!!!</h2>
            <Link to="/" className='volver' >Ver Productos</Link>
           </div>  
        </>
    )
 }
  
    return (
      <div>
          {
              carrito.map(Producto => <CartItem key={Producto.item.id} {...Producto}/>)
          }
  
          <h3>Total: ${total}</h3>
          <h3>Cantidad Total: {cantidadTotal}</h3>
          <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
          <Link to="/checkout">Finalizar Compra</Link>  
   
    </div>
  )
}

export default Cart