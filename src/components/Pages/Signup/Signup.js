import React, { Component } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom'

//Components to Import
import SignupForm from '../../Forms/SignupForm/SignupForm';
import SocialLoginForm from '../../Forms/SocialLoginForm/SocialLoginForm';

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
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Signup with SpringSocial</h1>
                    <SocialLoginForm displayText={this.state.isLoginOrSignup}/>
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
                </div>
            </div>
        );
    }
}

export default Signup