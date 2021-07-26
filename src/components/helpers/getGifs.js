
    export const getGifs = async (category) =>{

        

        // Probamos el endpoint con POSTMAN
        //encodeURI pilla la categoría que le pasemos por category y le quita espacios etc. 
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=E1aIlP6QjjzawxUTIMiyyPEajC0pQG5i`;

        // Hacemos una petición a la url
        const resp = await fetch(url);
        //Desestructuramos la parte que nos interesa del array que se devuelve (en este caso, data)
        const {data} = await resp.json();
        // Hacemos un .map a la data y, por cada item, devolvemos solo las partes que nos interesan (item.id, item.title, y la imagen en sí a el tamaño que nos interese. )
        const gifs = data.map(img=>{
            return {
                id : img.id,
                title: img.title,
                url : img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        return gifs;

    }
