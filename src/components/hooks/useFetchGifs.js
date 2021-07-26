

//CUSTOM HOOKS

import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category)=>{

    const [state, setstate] = useState({
        data : [],
        loading: true

    });

       // UseEffect llama a la función getGifs SÓLO CUANDO EL COMPONENTE ES RENDERIZADO LA PRIMERA VEZ. Hay que pasarle una lista de dependiencias (category) como segundo argumento para decirle cuando tiene que dispararse (al cambiar una category, en este caso)
       useEffect(()=>{
        
        getGifs(category)
        .then(imgs=>{
            
            setstate({
                data:imgs,
                loading:false
            }); 
        })
      
    },[category]);

    
    return state
}