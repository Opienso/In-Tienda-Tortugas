carritoLS = localStorage.getItem("carrito")

carritoJSON = JSON.parse(carritoLS)

////////////////////////////////
const contenedorCarrito = document.querySelector(".contenedor-carrito")
const carritoAcciones = document.querySelector(".carrito-acciones")
const MensajeCarritoVacio = document.querySelector(".carrito-vacio")
const VaciarCarrito = document.querySelector(".carrito-acciones-vaciar")

////////////////////////////////
if(carritoJSON.length != 0){
    carritoAcciones.classList.remove("disabled")
    MensajeCarritoVacio.classList.add("disabled")
}else{
    carritoAcciones.classList.add("disabled")
    MensajeCarritoVacio.classList.remove("disabled")
}

////////////////////////////////
cargarProductos();

function cargarProductos () {
carritoJSON.forEach(producto => {
    const productoAgregado = document.createElement("div")
    productoAgregado.classList.add("carrito-producto")
    productoAgregado.innerHTML = `<img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="carrito-producto-titulo">
        <small>${producto.titulo}</small>
        <h3>${producto.id}</h3>
    </div>
    <div class="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>1</p>
    </div>
    <div class="carrito-producto-precio">
        <small>Precio</small>
        <p>${producto.precio}</p>
    </div>
    <div class="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>${producto.precio}</p>
    </div>
    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i>Eliminar</button>`
    
    contenedorCarrito.append(productoAgregado)
});
}

////////////////////////////////
VaciarCarrito.addEventListener("click", vaciarCarro)

function vaciarCarro (){
    let quitarProducto = document.querySelectorAll(".carrito-producto")

    quitarProducto.forEach(producto => {
        producto.remove();

        localStorage.clear()
        location.reload();
})}

function vaciarCarro2 (){
    let quitarProducto = document.querySelectorAll(".carrito-producto")

    quitarProducto.forEach(producto => {
        producto.remove();

        localStorage.setItem("carrito", JSON.stringify(carritoJSON))
})}
/////////////////////////////
const RemoverProducto = document.querySelectorAll(".carrito-producto-eliminar")

RemoverProducto.forEach(boton => {
    boton.addEventListener("click", (e) => {
        const caca = e.currentTarget.id

        let quitarCarrito = carritoJSON.find((el)=> el.id === caca)

        indice = carritoJSON.indexOf(quitarCarrito)

        carritoJSON.splice(indice, 1)

        vaciarCarro2();
        cargarProductos();
        location.reload();
    })
});
    
