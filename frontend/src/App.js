import React, { useState, } from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  const userStatus = useSelector((state) => state.userInfo.userStatus)
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
      </Router >
    </>
  );
}

export default App;
