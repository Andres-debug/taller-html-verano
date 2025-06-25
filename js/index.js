async function obtenerUsuarios(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await respuesta.json()
    console.log(datos)
}

obtenerUsuarios()