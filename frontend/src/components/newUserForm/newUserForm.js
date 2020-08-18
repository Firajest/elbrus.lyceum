import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import './newUserForm.css';
import SendNewUserForm from '../../redux/thunks/newUserThunk'
import { useDispatch, useSelector } from 'react-redux';

function CreateUserForm() {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectValue, setSelectValue] = useState('student');
  const errorMessage = useSelector((state) => state.userInfo.errorMessage);
  const message = useSelector((state) => state.userInfo.message);

  function createUser(event) {
    event.preventDefault();
    dispatch(SendNewUserForm(inputName, inputEmail, selectValue));
    setInputEmail('');
    setInputName('');
  }


  return (
    <>
      <div id="newUserForm">
        <form onSubmit={(event) => createUser(event)}>
          <Input name="name" type="text" placeholder="ФИО" onChange={(event) => setInputName(event.target.value)} value={inputName} />
          <Input name="email" type="email" placeholder="Email" onChange={(event) => setInputEmail(event.target.value)} value={inputEmail} />
          <select placeholder="Select user's status" onChange={(event) => setSelectValue(event.target.value)}>
            <option value='student' selected='selected'>Student</option>
            <option value='teacher'>Teacher</option>
          </select>
          <button type="submit" id="createUserButton" className="createUserButton" >Create user</button>
        </form>
        {(errorMessage && errorMessage) || (message && message)}
      </div>
    </>
  )
}
export default CreateUserForm;
