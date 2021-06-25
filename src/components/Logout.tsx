import React from 'react';

interface LogoutProps {
  logOut?: Function
}

class Logout extends React.Component<LogoutProps> {
  public render(): JSX.Element {
    return (
      <div className="Logout">
        <button
          onClick={(e) => {
            if (this.props.logOut) {
              this.props.logOut(e);
            }
          }}
        >
          Sign out
        </button>
      </div>
    );
  }
}

export default Logout;
