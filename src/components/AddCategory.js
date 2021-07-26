import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    
    //Añado un hook de estado. 
    const [inputValue, setValue] = useState('Busca tus gifs aquí');


    const handleInputChange = (e)=>{
        setValue(e.target.value);
    }
    
    const handleSubmit = (e)=>{
        
        e.preventDefault();

        if(inputValue.length>2){
            setCategories((cats)=>[inputValue,...cats,]);
            setValue('');
        }
        
            

        
       
        

    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange = {handleInputChange}
            
            />
            </form>
           
        </>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}