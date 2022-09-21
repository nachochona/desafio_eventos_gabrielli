
class Productos {
    constructor(nombre, description, precio){
    this.nombre = nombre;
    this.description = description;
    this.precio = precio;
    }
};


const arroz = new Productos ("Arroz", "Arroz Molto de la mejor calidad", 150);
const leche = new Productos ("Leche", "LaSerenisima, la mejor del país", 99);
const harina000 = new Productos ("Harina 000", "Trabajada con amor", 130);
const harina0000 = new Productos ("Harina 0000", "Harina super refinada", 150);
const agua = new Productos ("Agua", "Agua mineralizada", 125);
const asado = new Productos ("Asado", "Carne de primara calidad", 550);
const miel = new Productos ("Miel", "Del panal, a tu mesa", 300);
const mostaza = new Productos ("Mostaza", "Savora le da sabor a tus comidas", 180);

const arrayProductos = [arroz, leche, harina000, harina0000, agua, asado, miel, mostaza];  //CREO EL ARRAY

const contenedorProductos = document.getElementById("contenedorProductos");
const form = document.getElementById("form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    agregarProducto();
});

function agregarProducto (){
    let nombre = document.getElementById("nombre").value;
    let description = document.getElementById("description").value;
    let precio = document.getElementById("precio").value;
    const nuevoProducto = new Productos (nombre, description, precio);
    arrayProductos.push(nuevoProducto);
    verProductos(arrayProductos)
    form.reset();
    alert("Producto agregado")
    console.log(arrayProductos)
    
}

function verProductos (item){
    contenedorProductos.innerHTML= ``; //---------------------------------------ESTUVE 6 HORAS TRATANDO DE QUE ME SALGA BIEN Y ME FALTABA ESTA LINEA DE CÓDIGO 
    item.forEach(element => {
        contenedorProductos.innerHTML += `
        <div class="card" style="width: 18rem;">    
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">${element.description}.</p>
          <p class="card-text">$${element.precio}.</p>
          <button href="#" class="btn btn-primary">Comprar</button>
        </div>
        </div>
        `
    })
};

