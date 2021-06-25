import React from 'react';
import logo from './logo.svg';
import './App.css';

import withFirebaseAuth, { WrappedComponentProps } from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './modules/FirebaseConfig';

import Login from './components/Login';
import Logout from './components/Logout';

const firebaseApp: firebase.app.App = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth: firebase.auth.Auth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends React.Component<object & WrappedComponentProps> {
  public render(): JSX.Element {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React + TypeScript: Login Practice</h1>
          {
            user
            ? (
              <div>
                <h2>Hello, {user.displayName}!</h2>
                <Logout logOut={signOut} />
              </div>
            )
            : (
              <Login googleLogin={signInWithGoogle} />
            )
          }
        </header>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
