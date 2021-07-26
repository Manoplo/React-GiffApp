import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
//import { getGifs } from './helpers/getGifs';
import GifGridItem from './GifGridItem';


export const GifGrid = ({category}) => {
    
    // Podemos renombrar una variable extraida con desestructuracion con : (el campo data del objeto categoría lo renombramos a images)
    const {data:images,loading} = useFetchGifs(category);
    
    

    return (
        <>
            <h3 className="cat">{category}</h3>

                {/*Operador ternario, si es true haz eso, si no, no hagas nada*/}
                {loading && <p className="animate__animated animate__flash">Loading...</p>}
            
                <div className="card-grid">
                    {
                    // Hago un foreach de las imagenes recibidas en el useState, creo un componente al que le paso el id y hago un spread operator para mandarle todas las propiedades que hemos extraido de la api al componente GifGridItem. 
                            images.map((img)=>(
                                <GifGridItem 
                                 key={img.id}
                                 {...img}
                            />
                        ))
                    }
                </div>
        </>
    )
}




