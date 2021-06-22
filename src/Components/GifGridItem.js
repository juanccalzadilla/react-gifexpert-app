import React from 'react'

export const GifGridItem = ({img}) => {

    return (
        <div className="card animate__animated animate__fadeIn animate__fast">
           <img src={img.url} alt={img.title}></img>
           <p>{img.title}</p>
        </div>
    )
}
