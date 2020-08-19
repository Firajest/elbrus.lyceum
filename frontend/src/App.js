import React from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import './App.css'
import { useSelector } from 'react-redux'
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import AdminPage from './components/adminPage/chieftain';
import NewUserForm from './components/newUserForm/newUserForm'

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

        <Route exact path='/'>
          {userStatus && <HomePage />}
        </Route>

      </Router>
      <Footer />

      <LoginForm />
      <NewUserForm />
      
    </>
  );
}

export default App;
