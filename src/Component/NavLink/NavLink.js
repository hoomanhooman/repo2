import React from 'react';
import './NavLink.css';

const NavLink=(props)=>{
    let pageNumberArray=[];
    for(let i=0;i<props.maxLength-1 ;i++)
    {
        pageNumberArray[i]=i;
    }
    return(
        <div className="NavLink">
            <input placeholder="Search" className="input search-box" value={props.filter} onChange={props.filterChange} type="text" name="searchBox" id="searchBox"/>
            <label htmlFor="pageSize" className="page-size-title">Show</label><input className="input" type="text" name="pageSize" id="pageSize" value={props.pageSize} onChange={props.changePageSize}/>
            <button className="prev-page pageNumber" onClick={props.prevPage}>{"<"}</button>
            {pageNumberArray.map(x=>{
                return (x+1===props.currentPage)?(<b className="pageNumber" key={x}>{x+1}</b>):(<span className="pageNumber" key={x}>{x+1}</span>)
            })}
            <button className="next-page pageNumber" onClick={props.nextPage}>{">"}</button>
            <label className="page-size-title" htmlFor="goToPage">Go to page</label><input className="input" type="text" name="goToPage" id="goToPage" value={props.currentPage} onChange={props.goToPage}/>
        </div>
    );
};

export default NavLink;