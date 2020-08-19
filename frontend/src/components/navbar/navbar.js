import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import Logo from '../ElbrusBootCamp-logo-RGB.svg'
import { Input } from 'semantic-ui-react';
import './navbar.css'
import { loginModalOn } from '../../redux/actionCreators'
import Logo from '../../ElbrusBootCamp-logo-RGB.svg'
import Logout from '../logout/logout'
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.userInfo.userStatus)
  const openLoginModal = () => {
    dispatch(loginModalOn())
  };

  const allDays = useSelector((state) => {
    return state.data.data.allDays
  })
  const [search, setSearch] = useState('')
  const Searchbar = () => (
    <Input className="searchBar"
      icon={{ name: 'search', circular: true, link: true }}
      placeholder='Search by tag'
      id='searchBar'
      onChange={event => setSearch(event.target.value)}
    />
  )
  return (
    <Router>
      <div>

      </div>
      <div className="App">
        {}
        <div></div>
        {/* NAVBAR */}
        <header className="navbar">
          <Link to='/'>
            <img src={Logo} alt="Tut budet logo" className="logo" />
          </Link>
          {Searchbar()}
          <div className='searchField'>
            {allDays && allDays.map((day) => {
              if (day.tags.includes(search)) {
                return (
                  <p>{day.name}</p>
                )
              } else if (search === '') {
                return (
                  <p>{day.name}</p>
                )
              }
            })}
          </div>
          {userStatus ?
            <Logout /> :
            <Button id="loginButton" className="dayButton" onClick={openLoginModal}>
              Login
          </Button>
          }
        </header>
      </div>
    </Router>
  )
}

export default Navbar