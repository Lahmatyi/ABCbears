import React, {Component} from "react";

const Collections = (props)=>{
    var items = props.items.map((item)=><div onClick={()=>props.onCollectionSelect(item)}>{item.title}</div>);
    return (<div>{items}</div>)
};

export default Collections;