
import React, { Fragment,useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {


    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () =>{

    //     setCategories([...categories, 'Rocio']);

    // }
    return ( 
        <Fragment>
            <h1 className="title">GifExpert App</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ul>

                {categories.map(category =>
                     <GifGrid
                     key={category}
                      category={category}/>
                )}
            </ul>

           
        </Fragment>
     );
}
 
export default GifExpertApp;