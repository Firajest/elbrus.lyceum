import React, { useState, } from 'react';
import HomePage from './components/homepage/homepage'
import NewUserForm from './components/newUserForm/newUserForm'
import LoginForm from './components/loginForm/loginForm'
import Logout from './components/logout/logout'
import AdminPage from './components/adminPage/chieftain'
import './App.css'
import { Input } from 'semantic-ui-react';
import Logo from './ElbrusBootCamp-logo-RGB.svg'
import { useSelector, useDispatch } from 'react-redux'
import { loginModalOn } from './redux/actionCreators'

import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  const InputExampleIconProps = () => (
    <Input className="searchBar"
      icon={{ name: 'search', circular: true, link: true }}
      placeholder='Search by tag'
      id='searchBar'
    />
  )
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userInfo.userStatus)

  const openLoginModal = () => {
    dispatch(loginModalOn())
  };

  return (
    <>
      <div className="App">
        {/* NAVBAR */}
        <header className="navbar">
          <img src={Logo} alt="Tut budet logo" className="logo" />
          {InputExampleIconProps()}
          {userStatus ?
            <Logout /> :
            <Button id="loginButton" className="dayButton" onClick={openLoginModal}>
              Login
          </Button>
          }
        </header>
        {/* NAVBAR */}
        <br></br>
        {userStatus && <HomePage />}
      </div>
      {/* Modals */}
      <LoginForm />
    </>
  );
}

export default App;
