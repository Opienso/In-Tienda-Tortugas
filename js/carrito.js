
carritoJSON = JSON.parse(localStorage.getItem("carrito"))

////////////////////////////////
const contenedorCarrito = document.querySelector(".contenedor-carrito")
const contenedorProductos = document.querySelector(".carrito-productos")
const carritoAcciones = document.querySelector(".carrito-acciones")
const MensajeCarritoVacio = document.querySelector(".carrito-vacio")
const VaciarCarrito = document.querySelector(".carrito-acciones-vaciar")
let RemoverProducto = document.querySelectorAll(".carrito-producto-eliminar")
const Total = document.querySelector("#total")
const comprar  = document.querySelector(".carrito-acciones-comprar")

////////////////////////////////-----------------//////////////////////////////

cargarProductos();


VaciarCarrito.addEventListener("click", vaciarCarro)

NumeritoQueVaAhiEnElCosoEseQueEstaAlLadoDelBotonDeComprarComoSeLlamabaEeeee();

comprar.addEventListener("click", () => {
    Swal.fire({
        title: 'Realizado!',
        text: 'Gracias por tu compra!',
        imageUrl: './img/turtle_2.gif',
        imageWidth: 270,
        imageHeight: 429,
        imageAlt: 'Custom image',
        background: '#184241',
        color: '#f4af14',
        confirmButtonColor: '#8f8059',
        confirmButtonText: 'De nada qwq',
    })
    vaciarCarro()
})


///////////////////////////////--------------------//////////////////////////
function cargarProductos() {

    if (carritoJSON != null) {

        carritoAcciones.classList.remove("disabled")
        MensajeCarritoVacio.classList.add("disabled")

        let index = 0; 

        carritoJSON.forEach(producto => {
            const productoAgregado = document.createElement("div")
            productoAgregado.classList.add("carrito-producto")
            productoAgregado.classList.add(`index${index}`)
            productoAgregado.innerHTML = `<img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    <div class="carrito-producto-titulo">
        <small>${producto.titulo}</small>
        <h3>${producto.id}</h3>
    </div>
    <div class="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>${producto.cantidad}</p>
    </div>
    <div class="carrito-producto-precio">
        <small>Precio</small>
        <p>${producto.precio}</p>
    </div>
    <div class="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>${producto.subtotal}</p>
    </div>
    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i>Eliminar</button>`


            contenedorCarrito.prepend(productoAgregado)
            index++
        });
    } else {

        carritoAcciones.classList.add("disabled")
        MensajeCarritoVacio.classList.remove("disabled")
    }
    actualizarBotonesEliminar();
}

///////////////////////////

function actualizarBotonesEliminar(){
    RemoverProducto = document.querySelectorAll(".carrito-producto-eliminar");

    RemoverProducto.forEach(boton => {
        boton.addEventListener("click", eliminarProducto)
    })
}
///////////////////////////

function eliminarProducto(e){
    if (carritoJSON.length === 1 && carritoJSON[0].cantidad === 1) { //Esto lo hago porque sino no se actualiza el msg no sé por q
        vaciarCarro();
    } else {
        const ID = e.currentTarget.id;
        const index = carritoJSON.findIndex(producto => producto.id === ID)

        if (carritoJSON[index].cantidad > 1) {
            carritoJSON[index].cantidad--
            carritoJSON[index].subtotal = carritoJSON[index].subtotal - carritoJSON[index].precio

            cargarProductos();

            localStorage.setItem("carrito", JSON.stringify(carritoJSON))
            location.reload();
        } else {
            const remover = document.querySelector(`.index${index}`)
            console.log(remover)
            remover.remove()

            carritoJSON.splice(index, 1);

            localStorage.setItem("carrito", JSON.stringify(carritoJSON))

            location.reload()
        }
        NumeritoQueVaAhiEnElCosoEseQueEstaAlLadoDelBotonDeComprarComoSeLlamabaEeeee();
    }
}

///////////////////////////
function vaciarCarro() {
    let quitarProducto = document.querySelectorAll(".carrito-producto")

    quitarProducto.forEach(producto => {
        producto.remove();
    })
    localStorage.clear()

    carritoAcciones.classList.add("disabled")
    MensajeCarritoVacio.classList.remove("disabled")
}
////////////////////////////
function NumeritoQueVaAhiEnElCosoEseQueEstaAlLadoDelBotonDeComprarComoSeLlamabaEeeee(){
    let total = 0

    carritoJSON.forEach(producto => {
        total = total + producto.subtotal
    })
    
    Total.innerText = "$" + total 
}