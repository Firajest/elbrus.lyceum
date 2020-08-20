import React, { useEffect, useState } from 'react';
import './userList.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { newUserModalOn, clearMessages, clearUploadMessages, addMaterialsModalOn } from '../../redux/actionCreators';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import User from '../User/user'

const BeautifulButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '20px',
    color: 'rgb(63,37,166)',
  },
}))(Button);
function AllUsers() {
  const [users, SetUsers] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await fetch('/user/allUsers');
      const response = await data.json();
      SetUsers(response.users);
    })()
  }, [SetUsers])
  console.log(users);


  return (
    <>
      <ul>
        {users.map((user) => {
          return (
           <User key={user._id} name={user.name} email={user.email} status={user.status} id={user._id}/>
          )
        })}
      </ul>
    </>
  );
}

export default AllUsers;
