//// OBJETOS - productos

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        cargarProductos(data);
    })

//// Mis variables con NODOS ewe...


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-menu")
const TituloPrincipal = document.querySelector(".titulo-principal")
const numeroCarrito = document.querySelector(".numerito")


//// Esto hace que se resalten los botonsitos owo

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active")) ///Primero quitamos el active de TODOS! los botones
        e.currentTarget.classList.add("active");  // Y cuando ninguno lo tiene se lo ponemos al que le hicimos click uwu

        TituloPrincipal.innerText = e.currentTarget.id //Esto es para cambiar lo que dice el texto del main (?)

        const productostos = document.querySelectorAll(".producto")
        productostos.forEach(producto => producto.remove())

        if (e.currentTarget.id != "Todos"){  //Aca estoy filtrando por el ID de lo que quiero cargar en el main
            const filtrado = productos.filter(producto => producto.categoria.nombre.includes(e.currentTarget.id))
            
            filtrado.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("producto");
                div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
                `;
                contenedorProductos.append(div);
            })
            BotonAgregarCarrito();
        }else{
            cargarProductos()
        }
    })
})


const carrito = []

carritoLS = localStorage.getItem("carrito")  //aca estoy obteniendo los datos del local storage que almacene dentro de la funcion BotonAgregarCarrito()
carritoJSON = JSON.parse(carritoLS)

if(carritoJSON != null){
    carritoJSON.forEach(producto =>{
        carrito.push(producto)
        NumeritoCarrito();
    })
}else{
    numeroCarrito.innerText = "0"
}

///////////////////////////////////////////
function cargarProductos(productos) {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}">Agregar</button>
                    </div>
        `;
        contenedorProductos.append(div);
    })
    BotonAgregarCarrito(productos);
}
///////////////////////////////////////////
function BotonAgregarCarrito(productos) {
    let BotonAgregar = document.querySelectorAll(".producto-agregar")

    BotonAgregar.forEach(botonAgregar => {
        botonAgregar.addEventListener("click", (e) => {
            const id = e.currentTarget.id

            let agregarAlCarrito = productos.find((el) => el.id === id);

            if(carrito.some(el => el.id === id)){
                const index = carrito.findIndex(producto => producto.id === id)
                carrito[index].cantidad++;
                carrito[index].subtotal = carrito[index].subtotal + carrito[index].precio;
            }else{
                agregarAlCarrito.cantidad = 1;
                agregarAlCarrito.subtotal = agregarAlCarrito.precio;
                console.log(agregarAlCarrito)
                carrito.push(agregarAlCarrito)
            }

            NumeritoCarrito();

            Toastify({

                text: "Producto agregado al carrito :D",
                gravity: "bottom",
                position: "left",
                className: "toast",
                style: {
                    background: "#8f8059"
                },
                destination: "./carrito.html",
                duration: 2300
                
                }).showToast();

            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    })
}
//////////////////////////////////////////
function NumeritoCarrito(){
    numeritoCarrito = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numeroCarrito.innerText = numeritoCarrito
}
