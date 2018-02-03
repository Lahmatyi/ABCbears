import firebase from 'firebase'
var config = {
  apiKey: "",
  authDomain: "abcbears-386f3.firebaseapp.com",
  databaseURL: "https://abcbears-386f3.firebaseio.com",
  projectId: "abcbears-386f3",
  storageBucket: "abcbears-386f3.appspot.com",
  messagingSenderId: "217994354935"
};
var fire = firebase.initializeApp(config);
export default fire;