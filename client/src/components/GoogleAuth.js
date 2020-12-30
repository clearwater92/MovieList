import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  // 2.0 토큰을 얻기 위해 클라이언트에서 사용해야 할 객체는
  // gapi.auth2와 gapi.client 객체이다. 이 객체들은 유저 권한을
  // 통해 api request를 만들 수 있게 해준다
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '474306429123-bjci5ptllq3bki2b71rg107phl8cfd4a.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log(this.auth);
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return <button onClick={this.onSignOut}>Sign Out</button>;
    } else {
      return <button onClick={this.onSignIn}>Sign In with Google</button>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
// 컴포넌트에 리덕스 스토어를 연동해 줄 때에는 connect 함수를 사용합니다.
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
