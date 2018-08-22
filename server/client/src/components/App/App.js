import React, { Component } from 'react';
import Signup from '../Signup/Signup.js';
import Login from '../Login/Login.js';
import { connect } from 'react-redux';
import * as actions from '../../actions'; 
import './App.css';
import MainLayout from '../MainLayout/MainLayout';


class App extends Component {

  componentDidMount() {
      this.setState({changed: false})
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.user!=null || nextState.changed === true) {
      return true;
    } else {
      return false;
    }
  }

  state = {
    mode: 'login',
    changed: false
  }

  signUpMode = () => {
    this.setState({mode: 'signup', changed: true})
  }

  logInMode = () => {
    this.setState({mode: 'login', changed: true})
  }

  render() {

    if(this.props.user!=null) {
      return <MainLayout/>
    } else {

      const component = 
        (this.state.mode === 'signup') ?
        <Signup clicked={this.logInMode} status = {this.props.status}/> : 
        <Login clicked={this.signUpMode} status={this.props.status}/>

      return(
        <div>
        <div className="App" style={{width: this.state.mode === 'login' ? '300px' : '300px'}}> 
          <img src="./assets/logo.png" width="300px" />
            <div>
              {component}
            </div>
        </div> 
        </div> 
      )
    }
  }
}

function mapStateToProps(state) {
  return { 
    status: state.auth.status,
    user: state.auth.user
  };
}

export default connect(mapStateToProps, actions)(App);
