import React from 'react';
// import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import logoutThunk from '../../redux/thunks/logoutThunk'

function Logout() {
  // const cookie = useSelector(state => state.cookie)
  const dispatch = useDispatch();
  function logoutFunc() {
    dispatch(logoutThunk());
  }
  return (
    <button type='button' onClick={logoutFunc}>Log out</button>
  )
}

export default Logout
