import React from 'react';
import './chieftain.css';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import getAllUsers from '../../redux/thunks/getAllUsers';

const BeautifulButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '30px',
    color: 'rgb(63,37,166)',
  },
}))(Button);


function AdminPage() {
  const dispatch = useDispatch();

  function seedUserState(){
    dispatch(getAllUsers());
  }

  return (
    <>
      <ul>
        <li><Link to="/allUsers"><BeautifulButton type="button" onClick={seedUserState}>User's list</BeautifulButton></Link></li>
      </ul>
    </>
  );
}

export default AdminPage;
