import React from 'react';
import googleLogo from '../../Images/google-logo.png';
import fbLogo from '../../Images/fb-logo.png';
import githubLogo from '../../Images/github-logo.png';
import './SocialLogin.css';

function SocialLogin() {

    return(
        <div className="social-login">
            <a className="btn btn-block social-btn facebook" href="#">
                <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
            <a className="btn btn-block social-btn google " href="#">
                <img src={googleLogo} alt="Google" /> Log in with Google</a>
            <a className="btn btn-block social-btn github" href="#">
                <img src={githubLogo} alt="Github" /> Log in with Github</a>
        </div>
    );
}

export default SocialLogin;