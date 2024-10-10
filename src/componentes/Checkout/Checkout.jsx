//version con descuento de productos

import { useState,useContext} from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import {db} from '../../services/config'
import { collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore'


const Checkout = () => {
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setemailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenid,setOrdenId] = useState("")

    const {carrito,vaciarCarritoSml,total}=useContext(CarritoContext)
    
    const manejadorFormulario=(event)=>{
        event.preventDefault();
 
    if(!nombre || !apellido || !telefono || !email || !emailConfirmacion)
         {
         setError("Por favor completar todos los campos antes de seguir!")
         return;  
         }  
       if(email !== emailConfirmacion)
            {
         setError("Los campos del email no coinciden, verificar")
         return;
            }
      
const orden = {
       items:carrito.map (Productos=>({
         id:Productos.item.id,
         nombre: Productos.item.nombre,
         cantidad:Productos.cantidad
       })),
       total: total,
       fecha: new Date(),
       nombre,
       apellido,
       telefono,
       email
};

 Promise.all(
    orden.items.map(async (productoOrden)=>{
      const productoRef= doc(db,"Productos",productoOrden.id)
      const productoDoc=await getDoc(productoRef)
      const StockActual=productoDoc.data().stock      
      await updateDoc(productoRef,{
        stock: StockActual - productoOrden.cantidad
      })
    })
 ) .then(()=>{
   addDoc(collection(db,"ordenes"),orden)
   .then(docRef=>{   
    setOrdenId(docRef.id)
    vaciarCarritoSml()   
    setNombre("")
    setApellido("")
    setEmail("")
    setTelefono("")
    setemailConfirmacion("")
   })     
   .catch(error=>{        
        setError("Se Produjo un error al crear la orden" ,error)
   })
}
) .catch(error=>{
          setError("No se puede Actualizar Stock,Intente nuevamente",error)  
      })  
   }
  return (
    <div>
        <h2>Checkout:</h2>
   <form onSubmit={manejadorFormulario}>
     {
        carrito.map(producto =>(
         <div key={producto.item.id}>
            <p>{producto.item.nombre} </p>
            <p>{producto.item.precio} x {producto.item.cantidad} </p>
            <p>{producto.item.precio} </p>
            <hr></hr>
        </div>
        ))
     }
     <div>
        <label htmlFor=''> Nombre </label>
        <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre} ></input>
     </div>
     <div>
        <label htmlFor=''> Apellido </label>
        <input type="text" id="apellido"  onChange={(e)=>setApellido(e.target.value)} value={apellido}  ></input>     
     </div>
     <div>
        <label htmlFor=''> Celular </label>
        <input type="text" id="celular"   onChange={(e)=>setTelefono(e.target.value)} value={telefono} ></input>   
     </div>
     <div>
        <label htmlFor=''> Email </label>
        <input type="email" id="email"   onChange={(e)=>setEmail(e.target.value)} value={email} ></input>   
     </div>     
     <div>
        <label htmlFor=''> Email Confirmacion </label>
        <input type="email" id="emailConfirmacion"   onChange={(e)=>setemailConfirmacion(e.target.value)} value={emailConfirmacion} ></input>   
     </div>         
     {
          error && <p style={{color:"red"}}>{error}</p>
     }
        <button type="submit"> Confirmar Compra </button>
        { 
          ordenid && (<strong>Gracias pro tu compra!!! Tu numero de order es : {ordenid}</strong>)
     
          }                
   </form>
    </div>
  )
}

export default Checkout