//// OBJETOS - productos

const productos = [
    //abrigos
    {
        id: "abrigo-01",
        titulo: "Sombrero fachero",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 2000
    },
    {
        id: "Abrigo-02",
        titulo: "Gallina",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 1500
    },
    {
    id: "Abrigo-03",
    titulo: "Florcita",
    imagen: "./img/abrigos/03.jpg",
    categoria: {
        nombre: "Abrigos",
        id: "abrigos",
    },
    precio: 1000
    },
    {
        id: "Abrigo-04",
        titulo: "Palmera",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos",
        },
        precio: 1700
    },
    {
        id: "Abrigo-05",
        titulo: "Cumpleaños",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo",
        },
        precio: 2500
    },
    //jeans
    {
        id: "Jean-01",
        titulo: "Jean original",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones",
        },
        precio: 2000
    },
    {
        id: "Jean-02",
        titulo: "Jean trucho",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones",
        },
        precio: 1000
    },
    //armamento
    {
        id: "Armamento-01",
        titulo: "Tortuga ninja",
        imagen: "./img/armamento/01.jpg",
        categoria: {
            nombre: "Armamento",
            id: "armamento",
        },
        precio: 3000
    },
    {
        id: "Armamento-02",
        titulo: "Casco",
        imagen: "./img/armamento/02.jpg",
        categoria: {
            nombre: "Armamento",
            id: "armamento",
        },
        precio: 2000
    },
    {
        id: "Armamento-03",
        titulo: "Tortuga cañon",
        imagen: "./img/armamento/03.jpg",
        categoria: {
            nombre: "Armamento",
            id: "armamento",
        },
        precio: 4000
    },
    {
        id: "Armamento-04",
        titulo: "Tortuga bombero",
        imagen: "./img/armamento/04.jpg",
        categoria: {
            nombre: "Armamento",
            id: "armamento",
        },
        precio: 3500
    },
]

//// Mis variables con NODOS ewe...


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-menu")
const TituloPrincipal = document.querySelector(".titulo-principal")
const BotonTodosLosProductos = document.querySelector("#Todos")
const BotonAbrigos = document.querySelector("#Abrigos")
const BotonPantalones = document.querySelector("#Pantalones")
const BotonArmamento = document.querySelector("#Armamento")


//// Cargo productos en la pag principal

function cargarProductos() {
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
    BotonAgregarCarrito();
}

cargarProductos();

//// Esto hace que se resalten los botonsitos owo

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesCategorias.forEach(boton => {
            boton.classList.remove("active");  ///Primero quitamos el active de TODOS! los botones
        })
        boton.classList.add("active");  // Y cuando ninguno lo tiene se lo ponemos al que le hicimos click uwu
    })
})
//////////////////////////

BotonTodosLosProductos.addEventListener("click", ()=>{
    TituloPrincipal.innerText = "Todos los productos"

    const productos = document.querySelectorAll(".producto")

    productos.forEach(producto => {
        producto.remove();
    })

    cargarProductos();

})

//////////////////////////

BotonAbrigos.addEventListener("click", () => {
    let productos = document.querySelectorAll(".producto")

    TituloPrincipal.innerText = "Abrigos"

    productos.forEach(producto => {
        producto.remove();
    })

    CargarAbrigos();
    
})


function CargarAbrigos(){
    const abrigos = productos.filter((producto) => producto.categoria.nombre.includes("Abrigos"));

    abrigos.forEach(abrigo => {
        const abriguitouwu = document.createElement("div")
        abriguitouwu.classList.add("producto");
        abriguitouwu.innerHTML = `
        <img class="producto-imagen" src="${abrigo.imagen}" alt="${abrigo.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${abrigo.titulo}</h3>
            <p class="producto-precio">$${abrigo.precio}</p>
            <button class="producto-agregar" id="${abrigo.id}">Agregar</button>
        </div>
        `;

        
        contenedorProductos.append(abriguitouwu)
    })
    BotonAgregarCarrito();
}

///////////////////////

BotonPantalones.addEventListener("click", ()=>{
    let productos = document.querySelectorAll(".producto")

    TituloPrincipal.innerText="Pantalones"

    productos.forEach(producto => {
        producto.remove();
    })

    CargarPantalones();
})

function CargarPantalones(){
    const pantalones = productos.filter((producto) => producto.categoria.nombre.includes("Pantalones"));

    pantalones.forEach(pantalon =>{
        const pantalowo = document.createElement("div")
        pantalowo.classList.add("producto");
        pantalowo.innerHTML=`
        <img class="producto-imagen" src="${pantalon.imagen}" alt="${pantalon.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${pantalon.titulo}</h3>
            <p class="producto-precio">$${pantalon.precio}</p>
            <button class="producto-agregar" id="${pantalon.id}">Agregar</button>
        </div>
        `;

        
        contenedorProductos.append(pantalowo)
    })
    BotonAgregarCarrito();
}

///////////////////

BotonArmamento.addEventListener("click", ()=>{
    let productos = document.querySelectorAll(".producto")

    TituloPrincipal.innerText="Armamento"

    productos.forEach(producto => {
        producto.remove();
    })

    CargarArmamento();
})

function CargarArmamento(){
    const Armamento = productos.filter((producto)=> producto.categoria.nombre.includes("Armamento"));

    Armamento.forEach(arma => {
        const armawa = document.createElement("div")
        armawa.classList.add("producto")
        armawa.innerHTML = `
    <img class="producto-imagen" src="${arma.imagen}" alt="${arma.titulo}">
    <div class="producto-detalles">
        <h3 class="producto-titulo">${arma.titulo}</h3>
        <p class="producto-precio">$${arma.precio}</p>
        <button class="producto-agregar" id="${arma.id}">Agregar</button>
    </div>
    `;

        contenedorProductos.append(armawa)
    })
    BotonAgregarCarrito();
}
/////////////////
const carrito = []

carritoLS = localStorage.getItem("carrito")

carritoJSON = JSON.parse(carritoLS)

if(carritoJSON != 0){
    carritoJSON.forEach(producto =>{
        carrito.push(producto)
    })
}else{
    // nada jeje
}

function BotonAgregarCarrito() {
    let BotonAgregar = document.querySelectorAll(".producto-agregar")

    BotonAgregar.forEach(botonAgregar => {
        botonAgregar.addEventListener("click", (e) => {
            const id = e.currentTarget.id

            let agregarAlCarrito = productos.find((el) => el.id === id);
            
            carrito.push(agregarAlCarrito)

            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
    })
}

