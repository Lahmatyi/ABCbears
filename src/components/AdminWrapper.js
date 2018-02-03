import React, {Component} from "react";
import {Link} from "react-router-dom";
import firebase from "firebase";
import fire, {fireui} from "../fire";

class AdminWrapper extends Component{
    constructor(){
        super();
        this.state={};
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({user: user})
        }, function(error){console.log(error);});
        //this.ui = new firebaseui.auth.AuthUI(firebase.auth());    
    }

    componentDidMount() {
        this.checkUser();
    }    

    checkUser(){
        if(this.state.user){
            return;
        }
        var uiConfig = {
            signInSuccessUrl: "/admin",
            signInOptions: [              
              firebase.auth.GoogleAuthProvider.PROVIDER_ID              
            ]
          };        
        fireui.start('#firebaseui-auth-container', uiConfig);                  
    }

    signOut(){
        firebase.auth().signOut();
    }

    render(){
        if(!this.state.user){
            return <div>
                <div>Login required</div>
                <div id="firebaseui-auth-container"></div>
            </div>
        }
        return (<div>
            <a onClick={this.signOut} href="">sign out</a>
            {this.props.children}
        </div>
        );
    }
}

export default AdminWrapper;