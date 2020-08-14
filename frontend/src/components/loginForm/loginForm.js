import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
// import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import statusCheck from '../../redux/thunks/sendLoginForm'

// import '../';
// const LoginButton = () => <Button type="submit" id="loginSubmitButton" className="loginButton" >Log in</Button>



function LoginForm() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useDispatch();

  function sendForm(event) {
    event.preventDefault();
    console.log(event.target, inputEmail, inputPassword);
    dispatch(statusCheck(inputEmail, inputPassword));
    setInputEmail('');
    setInputPassword('');
  }




  return (
    <>
      <form onSubmit={(event) => sendForm(event)}>
        <Input name="email" type="email" placeholder="Email" onChange={(event) => setInputEmail(event.target.value)} />
        <Input name="password" type="password" placeholder="Password" onChange={(event) => setInputPassword(event.target.value)} />
        <button type="submit" id="loginSubmitButton" className="loginButton" >Log in</button>
      </form>

    </>
  )
}

export default LoginForm
