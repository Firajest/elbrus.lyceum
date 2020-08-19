import React, { useState, dispatch} from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'

import { loginModalOn, clearMessages } from './redux/actionCreators'

import Button from '@material-ui/core/Button';
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Footer from './components/Footer';

function App() {
  const userStatus = useSelector((state) => state.userInfo.userStatus);

  const openLoginModal = () => {
    dispatch(clearMessages());
    dispatch(loginModalOn())
  };

  return (
    <>
      <Router>

        <Navbar></Navbar>
        <br></br>
        <LoginForm />
        <Route path='/chieftain'>
          <adminPage />

        </Route>
        <Route exact path='/'>
          {userStatus && <HomePage />}
        </Route>

      </Router>
      {/* <Footer /> */}

    </>
  );
}

export default App;
