import React from 'react';
import './Footer.style.css';
import BottomNavBar from '../Navigations/BottomNavBar/BottomNavBar.component';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <section className="section1">
                    <h1>Faithful Blendz</h1>
                </section>
                <section className="section2">
                    <Nav className="flex-column">
                        <h6 className="footer-h6">Religion</h6>
                        <Nav.Link href="/home" className="text-secondary">Buddhism</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Christianity</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Hinduism</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Islam</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Judaism</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Sikhism</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Taoism</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">More</Nav.Link>
                    </Nav>
                    <Nav className="flex-column">
                    <h6 className="footer-h6">Volunteer</h6>
                        <Nav.Link href="/home" className="text-secondary">Feed My Starving Children</Nav.Link>
                        <Nav.Link href="/help" className="text-secondary">Adopt a Highway</Nav.Link>
                        <Nav.Link href="/help" className="text-secondary">Meals on Wheels</Nav.Link>
                        <Nav.Link href="/help" className="text-secondary">Red Cross</Nav.Link>
                    </Nav>
                    <Nav className="flex-column">
                        <h6 className="footer-h6">Support</h6>
                        <Nav.Link href="/help" className="text-secondary">Contant Support</Nav.Link>
                        <Nav.Link href="/help" className="text-secondary">FAQ</Nav.Link>
                        <Nav.Link href="/help" className="text-secondary">Report Misconduct</Nav.Link>
                        <Nav.Link href="/help" className="text-secondary">Learning Center</Nav.Link>
                    </Nav>
                    <Nav className="flex-column">
                        <h6 className="footer-h6">Company</h6>
                        <Nav.Link href="/home" className="text-secondary">Why Faithful Blendz?</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Meet the Team</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Join the Team</Nav.Link>
                        <Nav.Link href="/home" className="text-secondary">Donate</Nav.Link>
                    </Nav>
                </section>
                
            </div>
            <BottomNavBar />
        </footer>
    );
}
 
export default Footer;