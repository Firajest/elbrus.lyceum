import React, { useState, useEffect } from 'react';
import HomePage from './components/homepage/homepage'
import LoginForm from './components/loginForm/loginForm'
import NewUserForm from './components/newUserForm/newUserForm'
import StatusCheck from './redux/thunks/statusCheckThunk'
import SendLoginForm from './redux/thunks/sendLoginForm'
import Logout from './components/logout/logout'
import './App.css'
import { Input } from 'semantic-ui-react';
import Logo from './ElbrusBootCamp-logo-RGB.svg'
import { Provider, useSelector, useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';

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


  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  // useEffect(() => {
  //   dispatch(StatusCheck());
  // })
   // useEffect(() => {
  //   dispatch(checkAllUsers());
  // }, [])

  const userStatus = useSelector((state) => state.userStatus)
  const errorMessage = useSelector((state) => state.errorMessage ? state.errorMessage : state.message);

  function sendForm(event) {
    event.preventDefault();
    console.log(event.target, inputEmail, inputPassword);
    dispatch(SendLoginForm(inputEmail, inputPassword));
    setInputEmail('');
    setInputPassword('');
  }

  return (
    <>
      <div className="App">
        <header className="navbar">
          <img src={Logo} className="logo" />
          {InputExampleIconProps()}
          {userStatus ?
            <Logout /> : //MODEREATE OUTFIT
            <Button id="dayButton" className="dayButton" onClick={handleClickOpen}>
              Login
          </Button>
          }
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
              <Input name="email" type="email" placeholder="Email" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} />
              <Input name="password" type="password" placeholder="Password" value={inputPassword} onChange={(event) => setInputPassword(event.target.value)} />
              <Button type="submit" id="loginSubmitButton" className="loginButton" >Log in</Button>
              {errorMessage && <p><strong>{errorMessage}</strong></p>}
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
    </>
  );
}

export default App;
