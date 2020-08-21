import React from 'react';
import './userList.css';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import User from '../User/user';
import { newUserModalOn, clearMessages } from '../../redux/actionCreators';

const BeautifulButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '20px',
    color: 'rgb(63,37,166)',
  },
}))(Button);

function AllUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userInfo.allUsers);

  function createUser() {
    dispatch(clearMessages());
    dispatch(newUserModalOn());
  };

  return (
    <>
      <BeautifulButton type="button" onClick={createUser}>Create new user</BeautifulButton>
      <ul>
        {(users !== undefined && users !== []) && users.map((user) => {
          return (
            <User key={user._id} name={user.name} email={user.email} status={user.status} id={user._id} />
          )
        })}
      </ul>
    </>
  );
}

export default AllUsers;
