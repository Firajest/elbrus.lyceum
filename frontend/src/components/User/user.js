import React from 'react';
import './user.css';
import { useDispatch } from 'react-redux';
import deleteThunk from '../../redux/thunks/deleteUserThunk';
import { clearDeleteMessages } from '../../redux/actionCreators';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BeautifulButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '20px',
    color: 'rgb(63,37,166)',
  },
}))(Button);


function CurrentUser({ name, email, status, id }) {
  const dispatch = useDispatch();
  // function updateUser() {

  // };

  function deleteUser() {
    dispatch(clearDeleteMessages());
    dispatch(deleteThunk(email, status, id));
  };

  return (
    <>
      <li>{name}, {email}, <strong>{status}</strong> </li>
      {/* <BeautifulButton type="button" onClick={updateUser}>Update</BeautifulButton> */}
      <BeautifulButton type="button" onClick={deleteUser}>Delete</BeautifulButton>
    </>
  );
}

export default CurrentUser;
