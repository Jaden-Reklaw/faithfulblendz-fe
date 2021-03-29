import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

//Components to Import
import Alert from 'react-s-alert';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import SocialLoginForm from '../../Forms/SocialLoginForm/SocialLoginForm';

//Bootstrap Components
import Container from 'react-bootstrap/Container';

class Login extends Component {
    state = {
        isLoginOrSignup: "Login"
    }

    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }
    
    render() {
        if(this.props.authenticated) {
            console.log('authenticated is true', this.props.authenticated);
            return <Redirect
                to={{
                pathname: "/profile",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <Container>
                <div className="login-content">
                    <h1 className="login-title">Login to SpringSocial</h1>
                    <SocialLoginForm displayText={this.state.isLoginOrSignup}/>
                    <div className="or-separator">
                    <p className="subtitle fancy"><span>OR</span></p>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="login-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </Container>
        );
    }
}

export default Login
