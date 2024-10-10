## Tienda Ematix:
Esta es una tienda on line (ecommerce), basico realizada durante el curso que hice de React Septiembre a.2024.
La aplicacion Permite ver una lista de producto relacionados con el mundo de la informatica como son computadores, perifericos y partes y piezas.
Ademas estos productos esta clasificados por Categorias.
y Finalmente estos Productos pueden ser comprados en linea a travez de la aplicacion.
se utiliza el Firebase para almacenar la informacion de Productos y tambien las ordenes de compras que se generan con las compras hechas por los usuarios.

## Tecnologias y herramientas Utilizados:
-Vite
-React
-React-Router-DOM
-Firebase
-Toastify
-Sweet Alert2
-Boostrap
-css

## Funcionalidades:
- Desplegar una lista con productos al inicio del Home
- A travez del menu puede Ver productos clasificados por Categorias.
- Agregar y eliminar productos del Carrito de compra.
- Ver el avance del Carrito.
- Filtrar productos y ver su detalle.
- Realizar una orden de compra con la informacion del comprador y productos que compras.
- La informacion de productos y ordenes se almacenan en una base de datos.  

## Instalacion


### Para instalar la aplicacion en forma local debe seguir los siguientes pasos:

1.) Clona el repositorio en tu Equipo Local.
2.) A travez de Visual CODE o del explorador de Archivos abre un terminar en el directorio del proyecto.
3.) Ejecuta el comando npm install para cargar las dependendencias en base al packaje.json.
4.) Ejecuta el comando npm install --save react-toastify para cargar las dependendencias de Toastify (instancia para mostrar mensajes con estilo).
5.) Ejecuta el comando npm install sweetalert2 para cargar las dependendencias de SweetAlert2 (instancia para mostrar mensajes con estilo).
6.) Ejecuta el comando npm install dotenv --dev para poder utilizar variables de entorno en tu aplicacion.
6.) Ejecuta el comando npm run dev para iniciar la aplicacion.
7.) Abre tu navegador y navega a http://localhost:5173 para poder ver la aplicacion en accion.

## Explicacion de la aplicacion.

### La aplicacion trabaja a travez de los siguiente componentes:

- App: Componente Raiz, que lo que hace es vincular mi carritoProvider donde tengo toda mi informacion de Context, ademas de tener agregado el BrowserRouter donde envuelvo toda mi aplicacion para dar una navegacion optima a todo mi proyecto.

- ItemListContainer: En el cual recibo mis productos en base a firebase, en donde puedo mostrar mis productos por categoria, o todos mis producto.

- ItemDetailContainer: En el cual recibo el productos el cual realice el click. Se muestra el detalle del mismo

- ItemDetail: En un componente Presentacional que recibe de su componente padre ItemDetailContainer los datos del producto y en donde puedo manejar la cantidad de productos que necesito comprar (a travez de un contador) y agregarlas al carrito a travez de un objeto que tiene los datos del item y la cantidad.

- Item: Muestra los detalles del Item (producto Seleecionado)

- Contador: En este componente se realiza la funcion de Sumar o restar cantidades (las cuales se van agregando por unidades) al carrito de productos.

- Checkout: En este componenente se realizan las funcionalidades de generar una orden de producto solicitando informacion basica al usuario la cual se guarda en la base de datos, validacion de la informacion que nos esta entregando el usuario al genera la compra,entregar el numero de orden al cliente.

