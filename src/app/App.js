import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

//Connect to the redux store
import { connect } from 'react-redux';

import OAuth2RedirectHandler from '../components/Oauth2/OAuth2RedirectHandler';
import NotFound from '../components/Pages/NotFound/NotFound';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants/Constants';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

//Import Pages
import Home from '../components/Pages/Home/Home';
import Login from '../components/Pages/Login/Login';
import Signup from '../components/Pages/Signup/Signup';
import Profile from '../components/Pages/Profile/Profile';
import TopNavBar from '../components/Navigations/TopNavBar/TopNavBar';

class App extends Component {
  state = {
      authenticated: false,
      currentUser: null,
      loading: false
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  loadCurrentlyLoggedInUser = () => {
    
    console.log('loadCurrentlyLoggedInUser');
    this.setState({
      loading: false
    });
    
    if(!sessionStorage.getItem(ACCESS_TOKEN)) {
      //console.log('!sessionStorage.getItem(ACCESS_TOKEN)', !sessionStorage.getItem(ACCESS_TOKEN));
      return Promise.reject("No access token set.");
    }
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    if(sessionStorage.getItem(ACCESS_TOKEN)) {
      headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN))
    }

    const options = {headers: headers, url: 'http://localhost:8080/user/me', method: 'GET'};
    fetch(options.url, options)
    .then(response => 
      response.json().then(json => {
          if(!response.ok) {
              return Promise.reject(json);
          }
          return json;
      }).then(response => {
        console.log("json response",response);
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        }); 
      })
    );    
  }

  handleLogout = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div className="app">
        <div className="app-top-box">
          <TopNavBar authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Home}></Route>           
            <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Profile}></PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

//Get redux store
const mapStateToProps = reduxState => ({
  
});

export default connect(mapStateToProps)(App);
