const productosPanel=document.getElementById('productos');   
const productos = [{
        "Id": 1,
        "Nombre": "Gordon`s",
        "Descripcion": "Gordon`s,Gin del sur de Londres",
        "Precio": 500,
        "Foto": "../imgs/Gordons.jpg",
        "Categoria": "gin"
    },
    {
        "Id": 2,
        "Nombre": "Grey Goose",
        "Descripcion": "Grey Goose, Vodka del norte de Francia",
        "Precio": 1500,
        "Foto": "../imgs/graygoose.jpg",
        "Categoria": "vodka"
    },
    {
        "Id": 3,
        "Nombre":"Tulamore Dew",
        "Descripcion":"Tulamore Dew,Whisky delcentro de Irlanda" ,
        "Precio": "2.500",
        "Foto": "../imgs/tullamoredew.jpg",
        "Categoria": "whisky"
    },
    {
        "Id": 4,
        "Nombre":"Jhonnie Walker",
        "Descripcion":"Jhonnie Walker,Whisky del este de Escocia" ,
        "Precio": "2.500",
        "Foto": "../imgs/jhonnieBlue.jpg",
        "Categoria": "whisky"
    },
    {
        "Id": 5,
        "Nombre":"Belbedere",
        "Descripcion":"Belbedere,Vodka del centro de Polonia",
        "Precio": "2.500",
        "Foto": "../imgs/belvedere.jpg",
        "Categoria": "vodka"
    },
    {
        "Id": 6,
        "Nombre":"Monkey 47",
        "Descripcion":"Monkey 47,Gin del sur de Alemania",
        "Precio": "2.500",
        "Foto": "../imgs/monkey47.jpg",
        "Categoria": "gin"
    }
];

// document.addEventListener('DOMContentLoaded', async() => { renderCard(productos) });
window.onload = function() {
// const renderCard = productos => {
    let productosPanelVista = "";
    productos.forEach(producto => {
        {
            productosPanelVista +=
                `<div class="col-12 mb-2 col-md-4 col-sm-4">
                <div class="card">
                <div class="card-body">
                <img id="fotoProducto"src="${producto.Foto}"class="card-img-top" style="height:200px">
                <h5 id="tituloProducto">${producto.Nombre}</h5> 
                <p id="descripcionProducto">${producto.Descripcion}</p> 
                <p id="precioProducto">$${ producto.Precio }</p>
                <button productos-id="${producto.Id}"id="mybtn" name="btnComprar" class="btn btn-success">Comprar</button>
            </div>
            </div>
            </div>
            `

        }
        document.getElementById('productos').innerHTML=productosPanelVista;
    });
};
// ----------------Empieza Filter--------------------------
document.getElementById("btn-filtrar").onclick = function filtrar(){
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
                    <button productos-id="${producto.Id}"id="mybtn" name="btnComprar" class="btn btn-success">Comprar</button>
                </div>
                </div>
                </div>
                `
            }
        }
        document.getElementById('productos').innerHTML=productosPanelVista;
    });
};


