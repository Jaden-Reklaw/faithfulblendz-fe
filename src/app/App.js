import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

//Connect to the redux store
import { connect } from 'react-redux';

import OAuth2RedirectHandler from '../components/Oauth2/OAuth2RedirectHandler';
import NotFound from '../components/Pages/NotFound/NotFound';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';
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

  componentDidUpdate(prevProps) {
    if(JSON.stringify(this.props.user) !== JSON.stringify(prevProps.user)) {
      console.log('props during component update', this.props.user.status);
      if(this.props.user.status === 401) {
        this.setState({authenticated: false, loading: false});
      } else {
        this.setState({currentUser: this.props.user, authenticated: true, loading: false});
      }
      
    }
  }
  
  loadCurrentlyLoggedInUser = () => {
    this.setState({
      loading: true
    });
    
    if(!sessionStorage.getItem(ACCESS_TOKEN)) {
      this.setState({
        loading: false
      });
      return Promise.reject("No access token set.");
    }

    this.props.dispatch({type: 'FETCH_USER'});  
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
const mapStateToProps = state => ({
  user: state.rootReducer.user,
});

export default connect(mapStateToProps)(App);
