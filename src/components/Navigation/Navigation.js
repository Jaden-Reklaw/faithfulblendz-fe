import React, { useState } from 'react';
import randomColor from 'randomcolor';
import useHover from '../Hover/useHover';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

let perColor = randomColor({ luminosity: 'bright' });
let questionColor = randomColor({ luminosity: 'light' });

function Navigation() {
    
    let textColor = randomColor({ luminosity: 'dark' });
        
    const [hoverRef1, isHovered1] = useHover();
    const [hoverRef2, isHovered2] = useHover();  
    const [display1, setDisplay1] = useState(false);  
    const [display2, setDisplay2] = useState(false);


    return (
        <div className="mb-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-medium">
                <a className="navbar-brand text-light mr-0 pr-0" href="#">Faithful Blendz<span className="ml-1" style={{color: perColor}}> .</span></a>
                <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-md-auto d-flex align-items-center">
                        <li className="font-comment" style={{color: questionColor}}>already a user?</li>
                        <li className="nav-item" ref={hoverRef1}>
                            {isHovered1 ? 
                                <a className="nav-link h3 font-block mb-0" style={{color: textColor, cursor: 'pointer'}} onClick={() => {setDisplay1(true); setDisplay2(false);}}>Login </a> :
                                <a className='nav-link text-random h3 font-block mb-0' href='/login'>Login</a> 
                            }    
                        </li>
                        <li className="nav-item" ref={hoverRef2}>
                            {isHovered2 ? 
                                <a className="nav-link h3 font-block mb-0" style={{color: textColor, cursor: 'pointer'}} onClick={() => {setDisplay2(true); setDisplay1(false)}}>Sign Up </a> :
                                <a className='nav-link text-random h3 font-block mb-0' href="/signup">Sign Up</a>
                            }    
                        </li>
                    </ul>
                </div>
                {display1 && (<Modal closeModal={() => setDisplay1(false)}>
                    <Login />
                </Modal>)}
                {display2 && (<Modal closeModal={() => setDisplay2(false)}>
                    <SignUp />
                </Modal>)}
            </nav>
        </div>

    );
}

export default Navigation;