import React from 'react';

import { useDispatch } from 'react-redux';
import logoutThunk from '../../redux/thunks/logoutThunk'
import './logout.css'

function Logout() {
  // const cookie = useSelector(state => state.cookie)
  const dispatch = useDispatch();
  function logoutFunc() {
    dispatch(logoutThunk());
  }
  return (
    <button id="logoutButton" type='button' onClick={logoutFunc}>Log out</button>
  )
}

export default Logout
