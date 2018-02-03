import React, {Component} from "react";

const CollectionInfo = (props) => (
    <div>
        <div>
            <input type="text" name="title" value={props.title} />            
        </div>
        <div>
            <textarea name="description" value={props.description} />            
        </div>
    </div>
)

export default CollectionInfo;