import React, { useState, dispatch } from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import './App.css'
import { useSelector } from 'react-redux'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import AdminPage from './components/adminPage/chieftain';
import NewUserForm from './components/newUserForm/newUserForm'
import UsersList from './components/usersList/userList'

function App() {
  const userStatus = useSelector((state) => state.userInfo.userStatus);

  return (
    <>
      <Router>

        <Navbar />
        {userStatus === 'chieftain' &&
          <Link to='/chieftain'>
            Trom-ka, Warchief
          </Link>
        }
        <br></br>
        <Route exact path='/chieftain'>
          <AdminPage />
        </Route>
        <Route exact path='/allUsers'>
          {userStatus === 'chieftain' && <UsersList />}
        </Route>

        <Route exact path='/'>
          {userStatus ? <HomePage /> : <h1>Welcome to Elbrus Lyceum! Please log in to see information.</h1>}
        </Route>

      </Router>

      <LoginForm />
      <NewUserForm />

      <Footer />
    </>
  );
}

export default App;
