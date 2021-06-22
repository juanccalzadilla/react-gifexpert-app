import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn upper">
                {category}
            </h3>

            {loading && <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>}

            <div className="card-grid">


                {images.map(img => {
                    return <GifGridItem
                        key={img.id}
                        img={img} />
                })}

            </div>
        </>
    )
}
