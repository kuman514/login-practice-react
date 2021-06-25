import React from 'react';

interface LoginProps {
  googleLogin?: Function
}

class Login extends React.Component<LoginProps> {
  public render(): JSX.Element {
    return (
      <div className="Login">
        <button
          onClick={(e) => {
            if (this.props.googleLogin) {
              this.props.googleLogin(e);
            }
          }}
        >
          Sign in with Google
        </button>
      </div>
    );
  }
}

export default Login;
