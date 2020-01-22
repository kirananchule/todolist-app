import React from 'react';
const FilterButtons =(props)=>{
    return(
        <div>
            <Filter filterClicked={props.filterClicked} value={'All'}></Filter>
            <Filter filterClicked={props.filterClicked} value={'Completed'}></Filter>
            <Filter filterClicked={props.filterClicked} value={'Pending'}></Filter>
            { props.filter && <div>Current Filter: {props.filter}</div>}
        </div>
    )
}
export default FilterButtons;
const Filter = (props) => {
    const value = props.value;
    return(
        <button onClick={()=>props.filterClicked(value)}>{value}</button>
    )
}
