import React, { Component } from 'react';

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
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Faithful Blendz.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
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
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}
 
export default TopNavBar;