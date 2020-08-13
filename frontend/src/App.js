import React from 'react';
import HomePage from './components/homepage/homepage'
import './App.css'
import { Input } from 'semantic-ui-react'

const InputExampleIconProps = () => (
  <Input className="searchBar"
    icon={{ name: 'search', circular: true, link: true }}
    placeholder='Search...'
  />
)





function App() {
  return (

    <div className="App">
      <header className="navbar">
        <span>Logo</span>
        {InputExampleIconProps()}
        <button className="loginButton">Login</button>
      </header>
      <br></br>
      <HomePage />

    </div>

  );
}

export default App;
