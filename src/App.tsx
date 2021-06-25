import React from 'react';
import logo from './logo.svg';
import './App.css';

import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './modules/FirebaseConfig';

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth: firebase.auth.Auth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React + TypeScript: Login Practice</h1>
      </header>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
