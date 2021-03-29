import React, { Component } from 'react';

//Components to Import
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../../constants/Constants';
import fbLogo from '../../../img/fb-logo.png';
import googleLogo from '../../../img/google-logo.png';
import githubLogo from '../../../img/github-logo.png';

import Button from 'react-bootstrap/Button';

class SocialLoginForm extends Component {
    render() {
        return (
            <div className="social-login">
                <Button className=" btn-block social-btn google" href={GOOGLE_AUTH_URL} variant="outline-dark">
                    <img src={googleLogo} alt="Google" /> {this.props.displayText} with Google
                </Button>
                <Button className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL} variant="outline-dark">
                    <img src={fbLogo} alt="Facebook" /> {this.props.displayText} with Facebook
                </Button>
                <Button className="btn btn-block social-btn github" href={GITHUB_AUTH_URL} variant="outline-dark">
                    <img src={githubLogo} alt="Github" /> {this.props.displayText} with Github
                </Button>
            </div>
        );
    }
}

export default SocialLoginForm;