import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
// import '../';

// const LoginButton = () => <Button type="submit" id="loginSubmitButton" className="loginButton" >Log in</Button>

function LoginForm() {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function sendForm(event) {
    event.preventDefault();
    console.log(event.target, inputLogin, inputPassword);

    (async () => {
      const data = await fetch('/user/login', {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          login: inputLogin,
          password: inputPassword,
        }),
      });
      const response = await data.json();
      console.log(response);
    })()
  }



  return (
    <>
      <form onSubmit={(event) => sendForm(event)}>
        <Input name="login" type="text" placeholder="Login" onChange={(event) => setInputLogin(event.target.value)} />
        <Input name="password" type="password" placeholder="Password" onChange={(event) => setInputPassword(event.target.value)} />
        <button type="submit" id="loginSubmitButton" className="loginButton" >Log in</button>
      </form>
    </>
  )
}

export default LoginForm
