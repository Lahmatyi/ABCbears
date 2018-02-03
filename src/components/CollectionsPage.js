import React, {Component} from "react";
import Collections from "./Collections";
import CollectionInfo from "./CollectionInfo";
import {fire} from "../fire";
import AdminWrapper from "./AdminWrapper";

class CollectionsPage extends Component {
    constructor(){
      super();
      this.state = {
        collections: [],
        selectedItem: {}
      };
    }

    render() {
    return (
      <AdminWrapper>
        <h2>Collections</h2>
        <Collections items={this.state.collections}
          onCollectionSelect={(item)=>this.setState({selectedItem: item})} />
        <CollectionInfo {...this.state.selectedItem} />
      </AdminWrapper>);
    }
  }

  export default CollectionsPage;