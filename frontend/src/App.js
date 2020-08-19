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
import { withStyles } from '@material-ui/core';
import Footer from './components/Footer';

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
      <Router>
        <div className="App">
          {/* NAVBAR */}
          <header className="navbar">
            <Link to='/'>
              <img src={Logo} alt="Tut budet logo" className="logo" />
            </Link>
            {userStatus === 'chieftain' &&
              <Link to="/chieftain">
                Trom-ka, Warchief!
            </Link>
            }
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
        </div>
        {/* Modals */}
        <LoginForm />
        <NewUserForm />

        <Route path='/chieftain'>
          {userStatus === 'chieftain' && <AdminPage />}
        </Route>
        <Route exact path='/'>
          {userStatus && <HomePage />}
        </Route>
      </Router>
      <Footer />
    </>
  );
}

export default App;
