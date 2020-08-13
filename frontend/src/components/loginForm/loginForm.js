import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './loginForm.css';

// const LoginButton = () => <Button type="submit" id="loginSubmitButton" className="loginButton" >Log in</Button>

function LoginForm() {

  function testFunc(event) {
    event.preventDefault();
    console.log(event.target);

  }



  return (
    <>
      <form onSubmit={(event) => testFunc(event)} >
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="Password" />
        <button type="submit" id="loginSubmitButton" className="loginButton" >Log in</button>
      </form>
    </>
  )
}

export default LoginForm
