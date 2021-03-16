import React, { Component } from 'react';

//Components to Import
import { ACCESS_TOKEN } from '../../../constants/Constants';
import Alert from 'react-s-alert';

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
        
        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        if(sessionStorage.getItem(ACCESS_TOKEN)) {
            headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN))
        }

        const loginRequest = Object.assign({}, this.state);
        console.log('loginRequest', loginRequest);

        const options = {
            headers: headers,
            url:"http://localhost:8080/auth/login",
            method: "POST",
            body: JSON.stringify(loginRequest)
        };

        fetch(options.url, options)
        .then(response => 
        response.json()
        .then(json => {
            if(!response.ok) {
              return Promise.reject(json);
            }
            return json;
        })).then(response => {
            sessionStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            this.props.history.push("/");
            //window.location.reload(false);
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Password"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>                    
        );
    }
}

export default LoginForm;