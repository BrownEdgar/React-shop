import React from 'react';
import s from './Products.module.css'
import {withRouter} from 'react-router-dom';
const Product = (props) => {
    const {id, title, img, price, company} = props.product;
    return (  
        <div className={s.root}>
            <span className={s.binIcon}><i class="fas fa-cart-plus"></i></span>
            <img src={img} alt={"phone logo"}/>
        <div className={s.pFooter}>
            <p>{title}</p>
            <p className={s.footerP}>${price}</p>
        </div>    
        </div>
      
     );
}
export default Product;
