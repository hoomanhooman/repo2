import React from 'react';
import './CategoryItem.css';

const CategoryItem=(props)=>{
    let category=[...new Set(props.DataProductList.filter(x=>x.categoryGroup==props.categoryGroup).map(x=>x.category))];
    return(
        <div className="CategoryItem" >
            {category.map(x=>(
                <div className="item" key={x} 
                      onClick={()=>props.changeCategory(x)}
                     >{x}
                </div>
            ))}
        </div>    
    );
}

export default CategoryItem;