//Sin Try Catch
async function obtenerUsuarios(){
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
    const datos = await respuesta.json()
    console.log(datos)
}

async function obtenerDatos(){
    try{

        const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        const data = await resp.json()
        console.log("Publicacion: ",data)

    }catch(error){
        console.log("Hubo un error ...", error.message)
    }
}

obtenerDatos()

