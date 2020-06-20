import React from 'react';
import Product from '../Product/Product';

import './ProductList.css';


const ProductList=(props)=>{
    //console.log(props);
    return(
        <div className="ProductList">
          {props.DataProductList.map(x=>(<Product addToCardHandler={()=>props.addToCardHandler(x.id)} key={x.id} DataProduct={x}/>))}
        </div>
    );
}

export default ProductList;