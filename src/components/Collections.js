import React, {Component} from "react";
//import CollectionInfo from CollectionInfo;

const Collections = (props)=>{
    var items = props.items.map((item)=><div onClick={()=>props.onCollectionSelect(item)}>{item.title}</div>);
    return <div>{items}</div>
};

export default Collections;