import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

function CreateUserForm() {
  // const countryOptions = [
  //   { key: 'student', value: 'student', text: 'Student', selected: true },
  //   { key: 'teacher', value: 'teacher', text: 'Teacher' },
  // ];
  // const statusSelector = () => (
  //   <Select placeholder="Select user's status" options={countryOptions} onChange={(event) => setSelectValue(event.target.value)} />
  // );


  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectValue, setSelectValue] = useState('student');

  function createUser(event) {
    event.preventDefault();
    // console.log(event.target, inputName, selectValue, inputEmail);

    (async () => {
      const data = await fetch('/user/new', {
        method: "PUT",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: inputEmail,
          name: inputName, //ФИО
          password: Math.random().toString(36).substring(7),
          status: selectValue,
        }),
      });
      const response = await data.json();
      // console.log(response);
    })()
    setInputEmail('');
    setInputName('');
  }


  return (
    <>
      <form onSubmit={(event) => createUser(event)}>
        <Input name="name" type="text" placeholder="ФИО" onChange={(event) => setInputName(event.target.value)} />
        <Input name="email" type="email" placeholder="Email" onChange={(event) => setInputEmail(event.target.value)} />
        <select placeholder="Select user's status" onChange={(event) => setSelectValue(event.target.value)}>
          <option value='student' selected='selected'>Student</option>
          <option value='teacher'>Teacher</option>
        </select>
        <button type="submit" id="createUserButton" className="createUserButton" >Create user</button>
      </form>
    </>
  )
}
export default CreateUserForm;
