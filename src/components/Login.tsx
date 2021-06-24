import firebase from "firebase/app";
import "firebase/auth";
import provider from '../modules/FirebaseAuth';

function Login(): JSX.Element {
  return (
    <div className="Login">
      <button
        onClick={() => {
          firebase.auth().signInWithRedirect(provider);
        }}
      >
        Login with Google
      </button>
    </div>
  );  
}

export default Login;
