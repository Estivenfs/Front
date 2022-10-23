const botones = document.querySelector(".container-sabor");
let productos = [
    {
        id:1,
        nombre: 'Capresse',
        precio: 1100,
        image: 'Capresse.jpg'
    },
    {
        id:2,
        nombre: 'American',
        precio: 1000,
        image: 'American.jpg'
    },
    {
        id:3,
        nombre: 'Gourmet',
        precio: 1200,
        image: 'Gourmet.jpg'
    },
    {
        id:4,
        nombre: 'Teriyaki',
        precio: 1250,
        image: 'Teriyaki.jpg'
    },
    {
        id:5,
        nombre: 'Calabresa',
        precio: 1350,
        image: 'Calabresa.jpg'
    },
    {
        id:6,
        nombre: 'Clasica',
        precio: 900,
        image: 'Clasica.jpg'
    },
    {
        id:7,
        nombre: 'Hot Cheddar',
        precio: 1400,
        image: 'Hot Cheddar.jpg'
    },
    {
        id:8,
        nombre: 'Mac and Cheese',
        precio: 1100,
        image: 'MacyCheese.jpg'
    },
    {
        id:9,
        nombre: 'Pollo',
        precio: 1100,
        image: 'Pollo.jpg'
    },
    {
        id:10,
        nombre: 'Doble Cheese',
        precio: 1500,
        image: 'CheeseBurger DB.jpg'
    },
    {
        id:11,
        nombre: 'Doble Pollo',
        precio: 1300,
        image: 'Pollo DB.jpg'
    },
    {
        id:12,
        nombre: 'Mexicana',
        precio: 1400,
        image: 'Mexicana.jpg'
    },
    {
        id:13,
        nombre: 'Argentina',
        precio: 1400,
        image: 'Argentina.jpg'
    },
    {
        id:14,
        nombre: 'Venezolana',
        precio: 1600,
        image: 'Venezolana.jpg'
    },
    {
        id:15,
        nombre: 'Mar y Tierra',
        precio: 1900,
        image: 'Mar y Tierra.jpg'
    }

];
var carrito =[];
function renderButtons(){
    productos.forEach(producto=>{
        const boton = document.createElement('button');
        boton.classList.add('sabor');
        boton.setAttribute('id',producto.id);
        boton.setAttribute('image',producto.image)
        boton.innerHTML = producto.nombre;
        boton.addEventListener('click',showImage);
        botones.appendChild(boton);
    })
    
    
}
function showImage(e){
    const img=e.target.getAttribute('image');
    const id = e.target.getAttribute('id');
    url='/img/'+img;
    let imagen= document.getElementById("imagen");  
    imagen.src=url;
    let seleccion = document.querySelector('#selected');
    seleccion.value = id;
}
function agregar(e){
    
    let seleccion = document.querySelector('#selected');
    let hamburguesaId = parseInt(seleccion.value);
    if(hamburguesaId>0){
        
        const hamburguesa = productos.filter(producto =>{
            return producto.id === hamburguesaId;
        });
        hamburguesa[0].cantidad=1;
        let hamburger = hamburguesa[0];
        let encontrado=false;
        for(let i=0; i<carrito.length;i++){
            if(carrito[i].id==hamburguesaId){
                encontrado=true;
                carrito[i].cantidad++;                
                break;
            }
        }       
        if(!encontrado){
            carrito.push({...hamburger});
        }     
        renderCarrito()
    }
    
}

function renderCarrito(){
    const miCarrito = document.querySelector('.mi-carrito');
    if(carrito.length>0){
        miCarrito.innerHTML = '';
       
            
            const divTitle= document.createElement('div');
            divTitle.classList.add('container-title');
            divTitle.innerHTML='<div class="title">Producto</div><div class="title">Cantidad</div>';
            miCarrito.appendChild(divTitle);
            
        
        
        carrito.forEach(elem=>{
            const carritoItem = document.createElement('div');
            carritoItem.classList.add('carrito-item');
            const prodItem = document.createElement('div');
            prodItem.classList.add('producto');
            const cantItem = document.createElement('div');
            cantItem.classList.add('cantidad');            
            cantItem.innerHTML = elem.cantidad;
            prodItem.innerHTML = elem.nombre;

            carritoItem.appendChild(prodItem);
            carritoItem.appendChild(cantItem);

            miCarrito.appendChild(carritoItem);


        })
    }
}
document.querySelector('#agregar').addEventListener('click',agregar)
renderButtons()