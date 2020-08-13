import React from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import './App.css'
import { Input } from 'semantic-ui-react';
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

const InputExampleIconProps = () => (
  <Input className="searchBar"
    icon={{ name: 'search', circular: true, link: true }}
    placeholder='Search...'
  />
)





function App() {
  return (
    <>
      <div className="App">
        <header className="navbar">
          <span>Logo</span>
          {InputExampleIconProps()}
          <Router>

            <Switch>
              <Link to="/login">
                <button className="loginButton">Log in</button>
              </Link>
            </Switch>
            <Route path='/login'>
              <LoginForm />
            </Route>
          </Router>
        </header>
        <br></br>
        <HomePage />

      </div>

    </>
  );
}

export default App;
