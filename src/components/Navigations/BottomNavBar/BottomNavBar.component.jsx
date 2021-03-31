import React from 'react';
import './BottomNavBar.style.css';

//Import Bootsrap Components
import Nav from 'react-bootstrap/Nav';

const BottomNavBar = () => {
    return (
        <div className="bottomNavBar">
            <div>
                <Nav>
                    <Nav.Link href="/"> &#169; Faithful Blendz, LLC</Nav.Link>
                    <Nav.Link href="/Terms">Terms</Nav.Link>
                    <Nav.Link eventKey="link-1">Privacy</Nav.Link>
                    <Nav.Link eventKey="link-2">About</Nav.Link>
                </Nav>
            </div>
            <div>
                <Nav>
                    <Nav.Link href="/"><i className="fab fa-google"></i></Nav.Link>
                    <Nav.Link href="/"><i class="fab fa-facebook"></i></Nav.Link>
                    <Nav.Link href="/"><i class="fab fa-github"></i></Nav.Link>
                    <Nav.Link href="/"><i class="fab fa-youtube"></i></Nav.Link>
                    <Nav.Link href="/"><i class="fab fa-linkedin"></i></Nav.Link>
                </Nav>
            </div>
        </div>
    );
}
 
export default BottomNavBar;