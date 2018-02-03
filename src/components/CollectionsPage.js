import React, {Component} from "react";
import Collections from "./Collections";
import CollectionInfo from "./CollectionInfo";
import fire from "../fire";

class CollectionsPage extends Component {
    constructor(){
      super();
      this.state = {
        collections: [],
        selectedItem: {}
      };
    }

    componentWillMount(){        
        let collectionsRef = fire.database().ref('collections').orderByKey().limitToLast(100);
        collectionsRef.on('child_added', snapshot => {
          /* Update React state when message is added at Firebase Database */
          let collection = { text: snapshot.val(), id: snapshot.key };
          this.setState({ collections: [collection].concat(this.state.collections) });
        })
      }
  
    render() {
    return (
      <div>
        <h2>Collections</h2>
        <Collections items={this.state.collections}
          onCollectionSelect={(item)=>this.setState({selectedItem: item})} />
        <CollectionInfo {...this.state.selectedItem} />
      </div>);
    }
  }

  export default CollectionsPage;