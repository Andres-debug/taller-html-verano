const contenedor = document.getElementById("personajes")

async function obtenerPersonajes(){
    try{
        const respuesta = await fetch("https://rickandmortyapi.com/api/character?page=1");
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

obtenerPersonajes();