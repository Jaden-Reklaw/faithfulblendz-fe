import React from 'react';
import randomColor from 'randomcolor';
import useHover from '../Hover/useHover';

function SignUp() {

    let textColor = randomColor({ luminosity: 'dark' });
    const [hoverRef, isHovered] = useHover();

    return(
        <div className="card pt-1">
            <div className="card-header">
                <h2 className="text-center font-marker mb-3">Create New Account</h2>
                <form className="signup">
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputFname1">First Name</label>
                        <input type="text" className="form-control" id="first-name-input" placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputLname1">Last Name</label>
                        <input type="text" className="form-control" id="last-name-input" placeholder="Last name" />
                    </div> */}
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputEmail1" className="mb-0">Email Address</label>
                        <input type="email" className="form-control" id="email-input" placeholder="Email" />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputUsername1" className="mb-0">Username</label>
                        <input type="text" className="form-control" id="user-name-input" placeholder="Username" />
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputPassword1" className="mb-0">Password<span className="font-comment small-comment ml-2 text-muted">Must be at least 8 characters!</span></label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password" />
                    </div>
                    <div style={{ display: 'none' }} id="alert" className="alert alert-danger" role="alert">
                        <h4 className="font-block mb-0 mt-1" id="alert-text"></h4>
                    </div>
                    <span ref={hoverRef}>
                        {isHovered ? 
                            <button type="submit" className="btn btn-block btn-lg btn-xlg btn-dark font-block mt-4" style={{color: textColor}}>Sign Up for
                            Faithful Blendz</button> :
                            <button type="submit" className="btn btn-block btn-lg btn-xlg btn-dark font-block mt-4">Sign Up for
                                Faithful Blendz</button>
                        }
                    </span>    
                </form>
            </div>
        </div>
    );
}

export default SignUp;