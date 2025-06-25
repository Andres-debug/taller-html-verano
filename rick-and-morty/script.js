const input = document.getElementById("busqueda")
const contenedor = document.getElementById("personajes")

input.addEventListener("keydown",async function (event) {
  
    if (event.key=== "Enter"){
        const nombre = input.value.trim().toLowerCase();
        contenedor.innerHTML=""

        if(nombre===""){
            contenedor.innerHTML="<p class='mensaje'>Por favor escriba un nombre<p>"
            return;
        }
        try{
            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
                if(!respuesta.ok){
                    throw new Error("Personaje no encontrado")
                }
            
            const datos = await respuesta.json();
            const personajes = datos.results;
            
                    personajes.forEach(personaje =>{
                        const tarjeta = document.createElement("div");
                        tarjeta.classList.add("card");
            
                        tarjeta.innerHTML = `
                        <img src="${personaje.image}" alt="${personaje.name}">
                        <h3>${personaje.name}</h3>
                        <p>Especie: ${personaje.species}</p>
                        <p>Estado: ${personaje.status}</p> 
                        `;
            
                        contenedor.appendChild(tarjeta);
                    })
            
                }catch(error){
                    contenedor.innerHTML = ` <p>Error al cargar los personajes :( </p>`;
                    console.error("Error: ",error)
                }

    }
})

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