import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newUserModalOn, clearMessages } from '../../redux/actionCreators'

function AdminPage() {
  const dispatch = useDispatch();
  
  function createUser() {
    dispatch(clearMessages());
    dispatch(newUserModalOn());
  }

  function showAllUsers() {
    
  }

  return (
    <>
      <ul>
        <li><button type="button" onClick={createUser}>Создать нового пользователя</button></li>
        <li><button type="button" onClick={showAllUsers}>Список пользователей</button></li>
        <li><button type="button" onClick={createUser}>Добавить материал</button></li>
      </ul>
    </>
  );
}

export default AdminPage;
