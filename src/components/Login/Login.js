import React from 'react';
import randomColor from 'randomcolor';
import useHover from '../Hover/useHover';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


function Login() {

    let textColor = randomColor({luminosity: 'dark'});

    const [hoverRef, isHovered] = useHover();

    return(
        <div className="card pt-1">
            <div className="card-header">
                <h2 className="text-center font-marker text-light pb-3" >Login to Faithful Blendz</h2>
                <SocialLogin />
                <span className="separator mb-1 font-comment">Or</span>
                <form className="login mt-0">
                    <div className="form-group mb-1">
                        <label htmlFor="username-input" className="mb-0">Username</label>
                        <input type="text" className="form-control" id="username-input" placeholder="Username"
                            autoCorrect="off" autoCapitalize="off" spellCheck="false" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-input" className="mb-0">Password</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password" />
                    </div>
                    {/* <div className="alert alert-danger mt-3 py-2 alert-dismissible" role="alert" id="db-alert">
                        <h4 className="font-block mb-0 mt-1" id="alert-text"></h4>
                        <button type="button" className="close anti-button" data-hide="alert" aria-label="Close">
                            <i className="fa fa-times text-danger"></i>
                        </button>
                    </div> */}
                    <span ref={hoverRef}>
                        {isHovered ? 
                            <button type="submit"
                                className="btn btn-block btn-lg btn-xlg btn-dark font-block mt-4" style={{color: textColor}}>Login to
                                Faithful Blendz</button> :
                            <button type="submit"
                                className="btn btn-block btn-lg btn-xlg btn-dark font-block mt-4 text-bright">Login to
                                Faithful Blendz</button>
                        }
                    </span>
                </form>
            </div>
        </div>

    );
}

export default Login;