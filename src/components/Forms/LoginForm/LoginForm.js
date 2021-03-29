import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//Bootstrap Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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
        this.props.dispatch({type: 'POST_LOGIN', payload: this.state});
    }
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
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
                    Login
                </Button>
            </Form>                    
        );
    }
}

export default connect()(LoginForm);