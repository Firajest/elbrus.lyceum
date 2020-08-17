import React from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import NewUserForm from './components/newUserForm/newUserForm'
import Logout from './components/logout/logout'
import './App.css'
import { Input } from 'semantic-ui-react';
import Logo from './ElbrusBootCamp-logo-RGB.svg'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, useSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ViewInfo from './redux/reducers/IndexReducer'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';
import { useState } from 'react';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { green, purple } from '@material-ui/core/colors';

const InputExampleIconProps = () => (
  <Input className="searchBar"
    icon={{ name: 'search', circular: true, link: true }}
    placeholder='Search by tag'
    id='searchBar'
  />
)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const store = createStore(
    ViewInfo,
    composeWithDevTools(applyMiddleware(thunk))
  )

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const TestButton = withStyles((theme) => ({
    root: {
      backgroundColor: 'rgb(63,37,166)',
      color: 'rgb(133, 227,251)',
      marginBottom: '5%',
      marginLeft: '10%',
      height: '120px',
      width: '450px',
      fontFamily: 'Rostin',
      fontSize: '18px',
      '&:hover': {
        color: '#29EDFF',
        backgroundColor: '#4520AB',
        boxShadow: '10px 10px 8px rgb(133, 227,251);',
      },
    },
  }))(Button);


  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  function sendForm(event) {
    event.preventDefault();
    console.log(event.target, inputEmail, inputPassword);

    (async () => {
      const data = await fetch('/user/login', {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
        }),
      });
      const response = await data.json();
      if (response.message === 'Successful login') {
        handleClose()
      }
      setErrorMessage(response.message)
      console.log(response);
    })()
  }

  return (
    <Provider store={store}>
      <div className="App">
        <header className="navbar">
          <img src={Logo} className="logo" />
          {InputExampleIconProps()}
          <Button id="loginButton" className="loginButton" onClick={handleClickOpen}>
            Login
          </Button>
        </header>
        <br></br>
        <HomePage />
      </div>
      <NewUserForm />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Please verify your identity</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form onSubmit={(event) => sendForm(event)}>
              <Input name="email" type="email" placeholder="Email" onChange={(event) => setInputEmail(event.target.value)} />
              <Input name="password" type="password" placeholder="Password" onChange={(event) => setInputPassword(event.target.value)} />
              <Button type="submit" id="loginSubmitButton" className="loginButton" >Log in</Button>
              <p><strong>{errorMessage}</strong></p>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <CancelIcon />
              Close
            </Button>
        </DialogActions>
      </Dialog>
    </Provider>
  );
}

export default App;
