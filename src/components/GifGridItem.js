import React from 'react'
// Como hice un spread operator de la data recibida, puedo pasarle lo que me interese como props a este componente. 
const GifGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}




export default GifGridItem
