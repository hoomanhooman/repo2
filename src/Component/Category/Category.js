import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Category.css';

const Category=(props)=>{
    let categoryGroup=[... new Set(props.DataProductList.map(x=>x.categoryGroup))];
    // console.log('props.selectedCategory',props.selectedCategoryGroup);
    return(
        <div className="Category">
            <div className="category-header">Category</div>
            {categoryGroup.map(x=>(<div className={"category-item "+(x==props.selectedCategoryGroup?"selected":"")} 
                                key={x} onClick={()=>props.changeCategoryGroup(x)}>{x}<span className="downside">{">"}</span>
                                {(x==props.selectedCategoryGroup?
                                    <CategoryItem  DataProductList={props.DataProductList}
                                                   categoryGroup={props.selectedCategoryGroup}
                                                   changeCategory={props.changeCategory}/>
                                :null)}   
                            </div>))}
        </div>
    );
}

export default Category;