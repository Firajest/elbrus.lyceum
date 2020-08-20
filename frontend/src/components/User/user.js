import React, { useState, useEffect } from 'react';
import './user.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { newUserModalOn, clearMessages, clearUploadMessages, addMaterialsModalOn } from '../../redux/actionCreators';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const BeautifulButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '20px',
    color: 'rgb(63,37,166)',
  },
}))(Button);


function CurrentUser({ name, email, status, id }) {
  const [message, setMessage] = useState('');
  
  function updateUser() {

  };
  
  function deleteUser() {
    
  };

  return (
    <>
      <li>{name}, {email}, <strong>{status}</strong> </li>
      <BeautifulButton type="button" onClick={updateUser}>Update</BeautifulButton>
      <BeautifulButton type="button" onClick={deleteUser}>Delete</BeautifulButton>
    </>
  );
}

export default CurrentUser;
