import React from 'react';
import ProductList from './Component/ProductList/ProductList';
import NavLink from './Component/NavLink/NavLink';
import DataProductList from './Data/DataProductList';
import Category from './Component/Category/Category';

import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      ProductList:DataProductList,
      Category:1,
      pageSize:4,
      currentPage:0,
      filter:'',
      selectedCategory:null,
      selectedCategoryGroup:null,
    };
  }

  showBannerHandler=()=>{
    this.setState({showForm:true});
  }
  changePageSizeHandler=(event)=>{
    if(!isNaN(event.target.value) && event.target.value>0)
    this.setState({pageSize:event.target.value,currentPage:0});
  }
  nextPageHandler=()=>{
    let nextPage=((this.state.currentPage+1)<(this.state.ProductList.length/this.state.pageSize))?this.state.currentPage+1:
                    this.state.currentPage;
    this.setState({currentPage:nextPage});
  }
  prevPageHandler=()=>{
    let prevPage=(this.state.currentPage-1)>=0?this.state.currentPage-1:this.state.currentPage;
    this.setState({currentPage:prevPage});
  }
  goToPageHandler=(event)=>{
    this.setState({currentPage:event.target.value-1});
  }

  filterChangeHandler=(event)=>{
    this.setState({filter:event.target.value,currentPage:0});
  }

  addToCardHandler=(id)=>{
    let index=this.state.ProductList.findIndex(x=>x.id===id);
    let ProductList=[...this.state.ProductList];
    ProductList[index].addToCard=true;
    this.setState(ProductList);
  }

  changeCategoryGroupHandler=(categoryGroup)=>{
    this.setState({selectedCategoryGroup:categoryGroup,currentPage:0});
  }

  changeCategoryHandler=(category)=>{
    this.setState({selectedCategory:category,currentPage:0});
  }

  render(){
    return (
      <div className="App">
        <NavLink changePageSize={this.changePageSizeHandler} 
                    nextPage={this.nextPageHandler} 
                    prevPage={this.prevPageHandler} 
                    pageSize={this.state.pageSize}  
                    currentPage={this.state.currentPage+1} 
                    goToPage={this.goToPageHandler} 
                    maxLength={Math.floor(this.state.ProductList.filter(x=>x.categoryGroup===this.state.selectedCategoryGroup ||this.state.selectedCategoryGroup ===null )//category group
                      .filter(x=>x.category===this.state.selectedCategory||this.state.selectedCategory===null)//category
                      .filter(x=>JSON.stringify(x).toLowerCase().indexOf(this.state.filter.toLowerCase())>=0) //searching
                      .length/this.state.pageSize)+1}
                    filter={this.state.filter}
                    filterChange={this.filterChangeHandler} />
        
        <div className="app-main">
          <div>
            <Category DataProductList={DataProductList} 
                    selectedCategory={this.state.selectedCategory} 
                    selectedCategoryGroup={this.state.selectedCategoryGroup} 
                    changeCategoryGroup={this.changeCategoryGroupHandler}
                    changeCategory={this.changeCategoryHandler} />
          </div>
          <div>
            <ProductList DataProductList={DataProductList
                        .filter(x=>x.categoryGroup===this.state.selectedCategoryGroup ||this.state.selectedCategoryGroup ===null )//category group
                        .filter(x=>x.category===this.state.selectedCategory ||this.state.selectedCategory===null)//category
                        .filter(x=>JSON.stringify(x).toLowerCase().indexOf(this.state.filter.toLowerCase())>=0) //searching
                        .slice(this.state.currentPage*this.state.pageSize,
                                (this.state.currentPage+1)*this.state.pageSize)} 
                                addToCardHandler={this.addToCardHandler}/> 
          </div>
        </div>
        <NavLink changePageSize={this.changePageSizeHandler} 
                    nextPage={this.nextPageHandler} 
                    prevPage={this.prevPageHandler} 
                    pageSize={this.state.pageSize}  
                    currentPage={this.state.currentPage+1} 
                    goToPage={this.goToPageHandler} 
                    maxLength={Math.floor(this.state.ProductList.filter(x=>x.categoryGroup===this.state.selectedCategoryGroup ||this.state.selectedCategoryGroup ===null )//category group
                      .filter(x=>x.category===this.state.selectedCategory||this.state.selectedCategory===null)//category
                      .filter(x=>JSON.stringify(x).toLowerCase().indexOf(this.state.filter.toLowerCase())>=0) //searching
                      .length/this.state.pageSize)+1}
                    filter={this.state.filter}
                    filterChange={this.filterChangeHandler} />       
      </div>
    );
  }
}

export default App;
