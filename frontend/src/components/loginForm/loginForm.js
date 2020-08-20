import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import SendLoginForm from '../../redux/thunks/sendLoginForm';
import { loginModalOff, clearMessages } from '../../redux/actionCreators';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LoginForm() {

  const handleClose = () => {
    dispatch(loginModalOff());
    dispatch(clearMessages());
  };
  const errorMessage = useSelector((state) => state.userInfo.errorMessage ? state.userInfo.errorMessage : state.userInfo.message);
  const loginFlag = useSelector((state) => state.modalFlags.loginFlag);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const dispatch = useDispatch();

  function sendForm(event) {
    event.preventDefault();
    dispatch(SendLoginForm(inputEmail, inputPassword));
    setInputEmail('');
    setInputPassword('');
  }

  if (errorMessage === 'Successful login') {
    handleClose();
  }

  return (
    <>
      <Dialog
        open={loginFlag}
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
              {errorMessage && <strong>{errorMessage}</strong>}
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
  )
}

export default LoginForm
