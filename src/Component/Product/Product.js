import React from 'react';
import './Product.css';
const Product=(props)=>{
    //console.log(props.DataProduct);
    let product=props.DataProduct;
    //import pic from  product.pic;
    return(
        <div className="Product-wrapper">
            <div className="header">
                {product.original?<img src={require('../../images/original.jpg')} alt=""/>:<img src={require('../../images/not_original.jpg')} alt=""/>}
            </div>
            <div className="col1">{/*image is fixed*/}
                <img src={require('../../images/iphone.jpg')} alt=""/>
            </div>
            <div className="col2">
                <div className="product description"><span className="title title-dark-blue">Product Title:</span>{product.title.substr(0,80)+'...'}</div>
                <div className="brand description"><span className="title">Brand Name:</span> {product.brandName}</div>
                <div className="subtitle description"><span className="title">Subtitle:</span>{product.subtitle}</div>
                <div>
                    <span className="category description"><span className="title title-gray">Category:</span>{product.category}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="activeProductVariety description"><span className="title title-gray">Active product variety:</span>{product.activeProductVariety}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="status description"><span className="title title-gray">Status:</span>{product.status}</span>
                </div>                
            </div> 
            <div className="col3">
                <div className="maxPrice description"><span className="title title-gray">Max.price:</span>{product.maxPrice} {product.unit}</div>
                <div className="minPrice description"><span className="title title-gray">Min.price:</span>{product.minPrice} {product.unit}</div>
            </div>
            <div className="col4 red-separator"></div>
            <div className="col5">                
                {!product.addToCard?<button onClick={props.addToCardHandler}>Add To My Product</button>:<div className="already-added">Already added</div>}
            </div>

          </div>
    );
}

export default Product;