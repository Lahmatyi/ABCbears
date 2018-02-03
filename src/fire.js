import firebase from 'firebase'
import firebaseui from "firebaseui";
var config = {
  apiKey: "AIzaSyAho_pGZQNrTCmBI4musH7tr36loq4z8Mo",
  authDomain: "abcbears-386f3.firebaseapp.com",
  databaseURL: "https://abcbears-386f3.firebaseio.com",
  projectId: "abcbears-386f3",
  storageBucket: "abcbears-386f3.appspot.com",
  messagingSenderId: "217994354935"
};
var fire = firebase.initializeApp(config);
var fireui = new firebaseui.auth.AuthUI(firebase.auth());

export {fire, fireui};