import React, { useState } from 'react';
import Product from './Product';
import StoreProducts from '../data';

import s from './Products.module.css'

const Products = (props) => {
    const [products, setProducts] = useState(StoreProducts);
    return ( 
        <div className={s.flex}>
           {products.map((elem,index)=>{
             return(
                <Product key={elem.id} product= {elem}/>
                );  
           })}
        </div>
     );
}
 
export default Products;