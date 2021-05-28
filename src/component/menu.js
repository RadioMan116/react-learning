import React from 'react';
import Product from "./product"

export default function Menu({menu, restaurantId}){

    return (
        <div>
            {menu.map( id => <Product key={id} id={id} restaurantId={restaurantId}/>)}
            {/* <Product /> */}
        </div>
    )
}