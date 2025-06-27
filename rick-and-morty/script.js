//Variables (const,let) No var
const input = document.getElementById("busqueda");
const contenedor = document.getElementById("personajes");
const mensaje = document.getElementById("mensaje")


//Funcion principal con async/await para obtener los datos desde la API
async function buscarPersonaje(nombre){

    mensaje.textContent="Cargando...";
    //Limpiamos el contenedor
    contenedor.innerHTML="";

    try{
        //Peticion a la api
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
        //Conversion datos a json
        const datos = await respuesta.json();

        //Condicionales yf/else y operadores logicos
        if(!datos.results || datos.results.length ===0){
            mensaje.textContent = "Nos e encontraron personajes";
            return;
        }

        //Bucle y uso de funciones declaradas

        datos.results.forEach(function(personaje){
            crearTarjeta(personaje);
        })

        mensaje.textContent = `Mostrando ${datos.results.length} personaje(s)`
    }catch(error){
        //Manejo de errores
        mensaje.textContent = "Ocurrio un error al buscar el personaje";
        console.error("Error de busqueda: ",error)
    }

}

function crearTarjeta(personaje){

    //Desestructuracion de objetos
    const {name,image,species,status}=personaje

    //DOM: creacion de elementos y asignacion de clases
    const card = document.createElement("div")
    card.classList.add("card")

    //Operador ternario y clases condicionales
    const claseEstado = status === "Dead" ? "estado-muerto" : status=== "Alive" ? "estado-vivo":"";

    //Template literals y modificacion del innerHTML
    card.innerHTML = `
        <img src="${image}" alt="${name}">
        <h3>${name}</h3>
        <p>Especie: ${species}</p>
        <p class="${claseEstado}">Estado: ${status}</p>
    `;

    contenedor.appendChild(card);
}

//Eventos (addEventListener) y funciones de flecha

input.addEventListener ("keydown",(e)=>{
    if( e.key === "Enter"){
        const nombre = input.value.trim();
        if(nombre.length>0){
            buscarPersonaje(nombre);
        }else{
            mensaje.textContent = "Escribe un nombre para buscar"
        }
    }
});




// input.addEventListener("keydown",async function (event) {
  
//     if (event.key=== "Enter"){
//         const nombre = input.value.trim().toLowerCase();
//         contenedor.innerHTML=""

//         if(nombre===""){
//             contenedor.innerHTML="<p class='mensaje'>Por favor escriba un nombre<p>"
//             return;
//         }
//         try{
//             const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
//                 if(!respuesta.ok){
//                     throw new Error("Personaje no encontrado")
//                 }
            
//             const datos = await respuesta.json();
//             const personajes = datos.results;
            
//                     personajes.forEach(personaje =>{
//                         const tarjeta = document.createElement("div");
//                         tarjeta.classList.add("card");
            
//                         tarjeta.innerHTML = `
//                         <img src="${personaje.image}" alt="${personaje.name}">
//                         <h3>${personaje.name}</h3>
//                         <p>Especie: ${personaje.species}</p>
//                         <p>Estado: ${personaje.status}</p> 
//                         `;
            
//                         contenedor.appendChild(tarjeta);
//                     })
            
//                 }catch(error){
//                     contenedor.innerHTML = ` <p>Error al cargar los personajes :( </p>`;
//                     console.error("Error: ",error)
//                 }

//     }
// })

// async function obtenerPersonajes(){
//     try{
//         const respuesta = await fetch("https://rickandmortyapi.com/api/character?page=2");
//         const datos = await respuesta.json();
//         const personajes = datos.results;

//         personajes.forEach(personaje =>{
//             const tarjeta = document.createElement("div");
//             tarjeta.classList.add("card");

//             tarjeta.innerHTML = `
//             <img src="${personaje.image}" alt="${personaje.name}">
//             <h3>${personaje.name}</h3>
//             <p>Especie: ${personaje.species}</p>
//             <p>Estado: ${personaje.status}</p> 
//             `;

//             contenedor.appendChild(tarjeta);
//         })

//     }catch(error){
//         contenedor.innerHTML = ` <p>Error al cargar los personajes :( </p>`;
//         console.error("Error: ",error)
//     }
// }

// obtenerPersonajes();