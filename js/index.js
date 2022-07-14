function saludar(){
    let nombre= prompt("Hola,como estas? Me decis tu nombre?");
    document.getElementById("saludo").innerHTML=`<p class="text-white text-center ">Hola ${nombre} Bienvenido.</p>`; 
}
let productosPanel=document.getElementById('productos');   
let productos = [{
        "Id": 1,
        "Nombre": "Gordon`s",
        "Descripcion": "Gin del sur de Londres",
        "Precio": 500,
        "Foto": "../imgs/Gordons.jpg",
        "Categoria": "gin",
        "Cantidad":0
    },
    {
        "Id": 2,
        "Nombre": "Grey Goose",
        "Descripcion": "Vodka del norte de Francia",
        "Precio": 1500,
        "Foto": "../imgs/graygoose.jpg",
        "Categoria": "vodka",
        "Cantidad":0
    },
    {
        "Id": 3,
        "Nombre":"Tulamore Dew",
        "Descripcion":"Whisky del centro de Irlanda" ,
        "Precio": 2500,
        "Foto": "../imgs/tullamoredew.jpg",
        "Categoria": "whisky",
        "Cantidad":0
    },
    {
        "Id": 4,
        "Nombre":"Jonnie Walker",
        "Descripcion":"Whisky del este de Escocia" ,
        "Precio": 2500,
        "Foto": "../imgs/jhonnieBlue.jpg",
        "Categoria": "whisky",
        "Cantidad":0
    },
    {
        "Id": 5,
        "Nombre":"Belbedere",
        "Descripcion":"Vodka del centro de Polonia",
        "Precio": 2500,
        "Foto": "../imgs/belvedere.jpg",
        "Categoria": "vodka",
        "Cantidad":0
    },
    {
        "Id": 6,
        "Nombre":"Monkey 47",
        "Descripcion":"Gin del sur de Alemania",
        "Precio": 2500,
        "Foto": "../imgs/monkey47.jpg",
        "Categoria": "gin",
        "Cantidad":0
    }
];

window.onload = function() {
// saludar();
    if(document.getElementById('productos') !==null){
        let productosPanelVista = "";
        productos.forEach(producto => {
            {
                productosPanelVista +=
                    `<div class="col-sm-3 w-10 ml-2 mt-2 ">
                    <div class="card text-center bg-dark text-white px-5">
                    <div class="card-body">
                    <img id="fotoProducto"src="${producto.Foto}"class="card-img-top" style="height:100px">
                    <h5 id="tituloProducto">${producto.Nombre}</h5> 
                    <p id="descripcionProducto">${producto.Descripcion}</p> 
                    <p id="precioProducto">$${ producto.Precio }</p>
                    <div class="input-group p-3">
                    <button class="bg-dark text-warning menos input-group-text" onclick="restar('${producto.Id}')">-</button>
                    <input id="${producto.Id}" type="text" class="bg-dark text-white w-25 text-center" value="0" readonly>
                    <button class="bg-dark text-warning mas input-group-text" onclick="sumar('${producto.Id}')">+</button>
                    </div>  
                    <button productos-id="${producto.Id}"id="mybtn" onclick="agregar('${producto.Id}')" name="btnComprar" class="btn btn-success">Comprar</button>
                </div>
                </div>
                </div>
                `
            }
            document.getElementById('productos').innerHTML=productosPanelVista;
        });
    }
};

// ----------------Empieza Filter--------------------------


function filtrar(){
    let filtro = document.getElementById("filtro").value;
    let productosPanelVista = "";
    productos.forEach(producto => {
        {
            if(filtro == "" || producto.Categoria == filtro.toLowerCase()){
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
        document.getElementById('productos').innerHTML=productosPanelVista;
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

function agregar(idLista){
    // agregar un producto a la lista de carrito de compras
    productos.forEach(producto=>{debugger;
        if(producto.Id==idLista){
            producto.Cantidad = document.getElementById(idLista).value;
            actualizarTotal(producto);
            if(document.getElementById(producto.Nombre + "_" + idLista) !== null){
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
    }
    )
    
};
function actualizarTotal(producto){
    let subtotal = producto.Precio * producto.Cantidad;    
    document.querySelector("#total").textContent = parseInt(document.querySelector("#total").textContent) + subtotal;   
    
};

//-------------------------Empieza Login ------------//
//-------------------------------------------------------//
//-------------------------------------------------------//
// funciones
const btnGuardar = document.getElementById("guardar");
const checkbox= document.getElementById("check");
const email= document.getElementById("email");
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");


function guardar(valor)
{
    let user = { usuario: email.value, pass: password.value};
    if(user.usuario == "" || user.pass=="")
    {
        password.innerText = "No son tu billetera dejale algo escrito por fa!!";
        return;
    }
    else
    {
        if(valor==="sessionStorage")
        {
            sessionStorage.setItem("item", JSON.stringify(user));
        }        
        if (valor === "localStorage") 
        {
            localStorage.setItem("item", JSON.stringify(user));
        }
    }
}

function recuperarDatos(){}

function iniciarSesion() 
{
    debugger;
    // 1ero fijarse si existe si existe lo recupera y si no existe
    // 2do guardar datos en el local storage o en el session storage depende si esta el checkbox 
    // 3ero abrir el index
    let usuariosLS = recuperarLS();
    let usuarioGuardado = usuariosLS.find(userSaved => userSaved.email == email.value);
    let usuarioCreado = crearUsuario();
    if (usuarioGuardado == null)
    {
        guardarUsuario(usuarioCreado);
    }

    guardarEnStorage();
    
    window.open("./index.html");
    
}

function recuperarLS()
{
    let datos = JSON.parse(localStorage.getItem("usuarios"));
    return datos; 
}



if (btnGuardar !== undefined && btnGuardar !== null)
{
    btnGuardar.addEventListener("click", (e)=>{
        e.preventDefault();
        inicioSesion(usuariosLS);
    });
}
function limpiarCampos() 
{
    nombre.value = "";
    userReg.value = "";
    passReg.value = "";
    email.value = "";
}
function crearUsuario()
{
    let mail = email.value;
    let password = pass.value;
    const user = new Usuario(mail, password);
    return user;
}

function guardarUsuario(usuario)
{    
    usuarios.push(usuario);
}

function guardarEnStorage(){
    localStorage.setItem(usuarios);
}
// btn olvido de contraseña (este ya anda)
function olvidoPass(){
    Swal.fire({
        title: 'JAJA, Colgado',
        text: 'Pues, te jodes',
        icon: 'error',
        confirmButtonText: 'Esta funcion no ha sido desarrollada!!'
    })
}
// finaliza

