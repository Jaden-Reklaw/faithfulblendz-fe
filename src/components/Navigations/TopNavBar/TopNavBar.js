import React, { Component } from 'react';

import logo from '../../../img/faithfulblendzlogo.png';
//Bootstrap Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class TopNavBar extends Component {
    render() { 
        return ( 
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/" className="text-light mr-auto">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Faithful Blendz .
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Donate</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            {this.props.authenticated ? 
                                <Nav className="mr-auto">
                                    <Nav.Link href="/profile">Profile</Nav.Link>
                                    <Nav.Link onClick={this.props.onLogout}>Logout</Nav.Link>
                                </Nav>
                                :
                                <Nav className="mr-auto">
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/Signup">Sign Up</Nav.Link>
                                </Nav>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}
 
export default TopNavBar;