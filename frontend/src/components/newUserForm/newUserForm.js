import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import './newUserForm.css';
import SendNewUserForm from '../../redux/thunks/newUserThunk'
import { useDispatch, useSelector } from 'react-redux';
import { newUserModalOff } from '../../redux/actionCreators'

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

function CreateUserForm() {
  const handleClose = () => {
    dispatch(newUserModalOff())
  };
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [selectValue, setSelectValue] = useState('student');
  const errorMessage = useSelector((state) => state.userInfo.errorMessage ? state.userInfo.errorMessage : state.userInfo.message);

  const newUserFlag = useSelector((state) => state.modalFlags.newUserFlag)

  function createUser(event) {
    event.preventDefault();
    dispatch(SendNewUserForm(inputName, inputEmail, selectValue));
    setInputEmail('');
    setInputName('');
  }


  return (
    <>
      <Dialog
        open={newUserFlag}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Please verify your identity</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div id="newUserForm">
              <p>Add new user</p>
              <form onSubmit={(event) => createUser(event)}>
                <Input name="name" type="text" placeholder="ФИО" onChange={(event) => setInputName(event.target.value)} value={inputName} />
                <Input name="email" type="email" placeholder="Email" onChange={(event) => setInputEmail(event.target.value)} value={inputEmail} />
                <select placeholder="Select user's status" onChange={(event) => setSelectValue(event.target.value)}>
                  <option value='student' selected='selected'>Student</option>
                  <option value='teacher'>Teacher</option>
                </select>
                <button type="submit" id="createUserButton" className="createUserButton" >Create user</button>
              </form>
              {(errorMessage && errorMessage)}
            </div>
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
export default CreateUserForm;

