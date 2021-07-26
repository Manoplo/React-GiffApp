import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifApp = ()=>{


    //Usamos hook useState. 
    const [categories, setCategories] = useState(['']);

 

    return  (

        <>
        <h2>GiffApp</h2>
        <AddCategory setCategories ={setCategories}/>
        <hr/>

        
        

        <ol>
            {/*El .map es como un foreach*/}
            {
            categories.map( category => (
                
                <GifGrid 
                key={category}
                category={category}/>
            ))
            }
        </ol>

        </>

    );

}

    


