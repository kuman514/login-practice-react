import firebaseConfig from "./FirebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);
const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default provider;
