import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newUserModalOn, clearMessages, clearUploadMessages, addMaterialsModalOn  } from '../../redux/actionCreators';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


function AdminPage() {
  const dispatch = useDispatch();

  function createUser() {
    dispatch(clearMessages());
    dispatch(newUserModalOn());
  };

  function showAllUsers() {

  };

  function addMaterials() {
    dispatch(clearUploadMessages());
    dispatch(addMaterialsModalOn());
  };

  return (
    <>
      <ul>
        <li><button type="button" onClick={createUser}>Create new user</button></li>
        <li><button type="button" onClick={showAllUsers}>User's list</button></li>
        {/* <li><button type="button" onClick={addMaterials}>Add new material</button></li> */}
      </ul>
      
    </>
  );
}

export default AdminPage;
