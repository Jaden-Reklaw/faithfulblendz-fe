import React, { Component } from 'react';

//Components to Import

//Connect to the redux store
import { connect } from 'react-redux';

//Import Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit = (event) => {
        event.preventDefault();   
        this.props.dispatch({type: 'POST_USER', payload: this.state});
        this.props.history.push("/profile");
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label srOnly>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="name" 
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label srOnly>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email" 
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label srOnly>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password" 
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required 
                    />
                </Form.Group>
                <Button type="submit" className="btn btn-block btn-primary">
                    Sign Up
                </Button>
            </Form>                    
        );
    }
}

export default connect()(SignupForm);