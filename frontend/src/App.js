import React, { useState, } from 'react';
import HomePage from './components/homepage/homepage'
import NewUserForm from './components/newUserForm/newUserForm'
import SendLoginForm from './redux/thunks/sendLoginForm'
import Logout from './components/logout/logout'
import AdminPage from './components/adminPage/chieftain'
import './App.css'
import { Input } from 'semantic-ui-react';
import Logo from './ElbrusBootCamp-logo-RGB.svg'
import { useSelector, useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Footer from './components/Footer';

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
  const [open, setOpen] = useState(false);

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
      borderRadius: '20px',
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


  const userStatus = useSelector((state) => state.userInfo.userStatus)
  const errorMessage = useSelector((state) => state.userInfo.errorMessage ? state.userInfo.errorMessage : state.userInfo.message);

  function sendForm(event) {
    event.preventDefault();
    console.log(event.target, inputEmail, inputPassword);
    dispatch(SendLoginForm(inputEmail, inputPassword));
    setInputEmail('');
    setInputPassword('');
  }

  return (
    <>
      <Router>
        <div className="App">
          <header className="navbar">
            <img src={Logo} alt="Tut budet logo" className="logo" />
            {InputExampleIconProps()}
            {userStatus ?
              <Logout /> : //MODEREATE OUTFIT
              <Button id="loginButton" className="dayButton" onClick={handleClickOpen}>
                Login
          </Button>
            }
            {userStatus === 'chieftain' &&
              <Link to='/chietain'>Lok'Tar, Warchief</Link>
            }
          </header>
          <br></br>
          {userStatus === 'chieftain' && <NewUserForm />}
          <HomePage />
        </div>
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

        <Switch>
          <Route path='/chieftain'>
            <adminPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
