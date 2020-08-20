import React from 'react';
import './chieftain.css'
import { useDispatch } from 'react-redux';
import { newUserModalOn, clearMessages } from '../../redux/actionCreators';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const BeautifulButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '30px',
    color: 'rgb(63,37,166)',
  },
}))(Button);


function AdminPage() {
  const dispatch = useDispatch();

  function createUser() {
    dispatch(clearMessages());
    dispatch(newUserModalOn());
  };

  function showAllUsers() {

  };

  return (
    <>
      <ul>
        <li><BeautifulButton type="button" onClick={createUser}>Create new user</BeautifulButton></li>
        <li><Link to="/allUsers"><BeautifulButton type="button" onClick={showAllUsers}>User's list</BeautifulButton></Link></li>
      </ul>
    </>
  );
}

export default AdminPage;
