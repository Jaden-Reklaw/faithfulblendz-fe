import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

//Components to Import
import SignupForm from '../../Forms/SignupForm/SignupForm';
import SocialLoginForm from '../../Forms/SocialLoginForm/SocialLoginForm';

//Boostrap Components
import Container from 'react-bootstrap/Container';

class Signup extends Component {
    state = {
        isLoginOrSignup: "Sign up"
    }
    
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <Container>
                <div className="login-content">
                    <h1 className="login-title">Signup with SpringSocial</h1>
                    <SocialLoginForm displayText={this.state.isLoginOrSignup}/>
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
                </div>
            </Container>
        );
    }
}

export default Signup