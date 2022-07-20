// function saludar()
// {
//     let nombre= prompt("Hola,como estas? Me decis tu nombre?");
//     document.getElementById("saludo").innerHTML=`<p class="text-white text-center ">Hola ${nombre} Bienvenido.</p>`; 
// }
let productosPanel = document.getElementById('productos');
let productos = [{
        "Id": 1,
        "Nombre": "Gordon`s",
        "Descripcion": "Gin del sur de Londres",
        "Precio": 500,
        "Foto": "../imgs/Gordons.jpg",
        "Categoria": "gin",
        "Cantidad": 0
    },
    {
        "Id": 2,
        "Nombre": "Grey Goose",
        "Descripcion": "Vodka del norte de Francia",
        "Precio": 1500,
        "Foto": "../imgs/graygoose.jpg",
        "Categoria": "vodka",
        "Cantidad": 0
    },
    {
        "Id": 3,
        "Nombre": "Tulamore Dew",
        "Descripcion": "Whisky del centro de Irlanda",
        "Precio": 2500,
        "Foto": "../imgs/tullamoredew.jpg",
        "Categoria": "whisky",
        "Cantidad": 0
    },
    {
        "Id": 4,
        "Nombre": "Jonnie Walker",
        "Descripcion": "Whisky del este de Escocia",
        "Precio": 2500,
        "Foto": "../imgs/jhonnieBlue.jpg",
        "Categoria": "whisky",
        "Cantidad": 0
    },
    {
        "Id": 5,
        "Nombre": "Belbedere",
        "Descripcion": "Vodka del centro de Polonia",
        "Precio": 2500,
        "Foto": "../imgs/belvedere.jpg",
        "Categoria": "vodka",
        "Cantidad": 0
    },
    {
        "Id": 6,
        "Nombre": "Monkey 47",
        "Descripcion": "Gin del sur de Alemania",
        "Precio": 2500,
        "Foto": "../imgs/monkey47.jpg",
        "Categoria": "gin",
        "Cantidad": 0
    }
];

window.onload = function() {
    // saludar();
    if (document.getElementById('productos') !== null) {
        let productosPanelVista = "";
        productos.forEach(producto => {
            {
                productosPanelVista +=
                    `<section class="row-xs main-xs-center cross-xs-center">
                    <img id="fotoProducto"src="${producto.Foto}"class="card-img-top" style="height:100px">
                    <h5 id="tituloProducto">${producto.Nombre}</h5> 
                    <p id="descripcionProducto">${producto.Descripcion}</p> 
                    <p id="precioProducto">$${ producto.Precio }</p>
                    <button class="btn btn-info" onclick="buscarDetalle('${producto.Categoria}','${producto.Id}')">Descripcion</div>
                    <p id="detalle${producto.Id}"></p>
                    <div class="input-group p-3">
                    <button class="bg-dark text-warning menos input-group-text" onclick="restar('${producto.Id}')">-</button>
                    <input id="${producto.Id}" type="text" class="bg-dark text-white w-25 text-center" value="0" readonly>
                    <button class="bg-dark text-warning mas input-group-text" onclick="sumar('${producto.Id}')">+</button>
                    </div>  
                    <button productos-id="${producto.Id}"id="mybtn" onclick="agregar('${producto.Id}')" name="btnComprar" class="btn btn-success">Comprar</button>
                `
            }
            document.getElementById('productos').innerHTML = productosPanelVista;
        });
    }
};

// ----------------Empieza Filter--------------------------


function filtrar() {
    let filtro = document.getElementById("filtro").value;
    let productosPanelVista = "";
    productos.forEach(producto => {
        {
            if (filtro == "" || producto.Categoria == filtro.toLowerCase()) {
                productosPanelVista +=
                    `<div class="col-12 mb-2 col-md-4 col-sm-4">
                    <div class="card">
                    <div class="card-body">
                    <img id="fotoProducto"src="${producto.Foto}"class="card-img-top" style="height:200px">
                    <h5 id="tituloProducto">${producto.Nombre}</h5> 
                    <p id="descripcionProducto">${producto.Descripcion}</p> 
                    <p id="precioProducto">$${ producto.Precio }</p>
                    <button productos-id="${producto.Id}"id="mybtn" onclick="agregar('${producto.Id}')" name="btnComprar" class="btn btn-success">Comprar</button>
                </div>
                </div>
                </div>
                `
            }
        }
        document.getElementById('productos').innerHTML = productosPanelVista;
    });
};

function sumar(bebida) {
    let valorActual = Number(document.getElementById(bebida).value);
    valorActual = valorActual + 1;
    document.getElementById(bebida).value = valorActual;
}

function restar(bebida) {
    let valorActual = Number(document.getElementById(bebida).value);
    if (valorActual == 0) {
        return;
    }
    valorActual = valorActual - 1;
    document.getElementById(bebida).value = valorActual;
}
// --------------Empieza funcion de agregar en el carrito de compras----------

function agregar(idLista) {
    // agregar un producto a la lista de carrito de compras
    productos.forEach(producto => {
        debugger;
        if (producto.Id == idLista) {
            producto.Cantidad = document.getElementById(idLista).value;
            actualizarTotal(producto);
            if (document.getElementById(producto.Nombre + "_" + idLista) !== null) {
                document.getElementById(producto.Nombre + "_" + idLista).remove();
            }
            document.getElementById('detalleCarrito').innerHTML +=
                `
            <div id="${producto.Nombre}_${idLista}">${producto.Nombre}
            <div id="sumaPrecios">Precio $${producto.Precio}<div>
            <div id="cantidad">Cantidad ${producto.Cantidad}<div>
            <hr color="white" size=5>
            <div>
            `
        }
    })

};

function actualizarTotal(producto) {
    let subtotal = producto.Precio * producto.Cantidad;
    document.querySelector("#total").textContent = parseInt(document.querySelector("#total").textContent) + subtotal;

};

function buscarDetalle(categoria, id) {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";
    fetch(url + categoria)
        .then(response => response.json())
        .then(data => {
            let detalle = document.getElementById("detalle" + id);
            detalle.innerHTML = data.ingredients[0].strDescription;
        })
}
$(document.body).on('click', 'a[href*="#"]', function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 900);
});

$(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();
    var height = $(window).height();
    if (scrolled < height) {
        $('.full-image').css({
            'top': -scrolled * .5
        });
    }
});
//-------------------------------------------------------//
//-------------------------------------------------------//
//-------------------------Empieza Login ----------------//
//-------------------------------------------------------//
//-------------------------------------------------------//
// funciones
const btnGuardar = document.getElementById("guardar");
const checkbox = document.getElementById("check");
const user = document.getElementById("user");
const pass = document.getElementById("pass");
let usuarios = [];

if (btnGuardar !== undefined && btnGuardar !== null) {
    btnGuardar.addEventListener("click", (e) => {
        e.preventDefault();
        iniciarSesion(usuariosLS);
    });
}

function guardar(valor) {
    let user = { usuario: email.value, pass: password.value };
    if (user.usuario == "" || user.pass == "") {
        password.innerText = "No son tu billetera dejale algo escrito por fa!!";
        return;
    } else {
        if (valor === "sessionStorage") {
            sessionStorage.setItem("item", JSON.stringify(user));
        }
        if (valor === "localStorage") {
            localStorage.setItem("item", JSON.stringify(user));
        }
    }
}

//function recuperarDatos(){}

function iniciarSesion() {
    debugger;
    let usuario;

    let usuariosLS = recuperarLS();
    if (usuariosLS == null) {
        usuario = crearUsuario();
        guardarUsuario(usuario);
        debugger;
        guardarEnStorage();
    } else {
        const user = document.getElementById("user");
        let usuarioGuardado = usuariosLS.find(userSaved => userSaved.email == user.value);
        if (usuarioGuardado == null) {
            usuario = crearUsuario();
            guardarUsuario(usuario);
            guardarEnStorage();
        } else {
            const pass = document.getElementById("pass");
            if (pass.value == usuarioGuardado.contrasenia) {
                window.open("./index.html");
            } else {
                olvidoPass();
            }
        }

    }

}

function crearUsuario() {
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    let mail = user.value;
    let password = pass.value;
    return new Usuario(mail, password);
}

class Usuario {
    constructor(email, contrasenia) {
        this.email = email;
        this.contrasenia = contrasenia;
    }
}

function guardarUsuario(usuario) {
    usuarios.push(usuario);
}

function guardarEnStorage() {
    let usuarioJson = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", usuarioJson);
}

function recuperarLS() {
    if (localStorage.getItem("usuarios") == null) {
        return null;
    }
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos;
}



function limpiarCampos() {
    nombre.value = "";
    userReg.value = "";
    passReg.value = "";
    email.value = "";
}


// btn olvido de contraseña (este ya anda)
function olvidoPass() {
    Swal.fire({
        title: 'te olvidaste el password?',
        text: 'Pues, te jodes',
        icon: 'error',
        confirmButtonText: 'Esta funcion no ha sido desarrollada!!'
    })
}
// finaliza
//------------------Empieza Api-------------//

fetch('https://www.thecocktaildb.com/api.php')
    .then((response) => response.json())
    .then((datos) => console.log(datos));