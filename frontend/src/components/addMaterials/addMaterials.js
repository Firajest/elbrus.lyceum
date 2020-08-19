import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import './newUserForm.css';
import SendMaterialsForm from '../../redux/thunks/addMaterialsThunk'
import { useDispatch, useSelector } from 'react-redux';
import { addMaterialsModalOff, clearMessages } from '../../redux/actionCreators'

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
    dispatch(addMaterialsModalOff())
  };
  const dispatch = useDispatch();
  const [inputLection, setInputLection] = useState('');
  const [inputPresentation, setInputPresentation] = useState('');
  const [inputCode, setInputCode] = useState('');
  const errorMessage = useSelector((state) => state.userInfo.errorMessage ? state.userInfo.errorMessage : state.userInfo.message);

  const materialsFlag = useSelector((state) => state.modalFlags.materialsFlag)

  function addMaterial(event) {
    event.preventDefault();
    dispatch(clearMessages());
    dispatch(SendMaterialsForm(inputLection, inputPresentation, inputCode));
    setInputLection('');
    setInputPresentation('');
    setInputCode('');
  }


  return (
    <>
      <Dialog
        open={materialsFlag}
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
              <p>Add new material</p>
              <form onSubmit={(event) => addMaterial(event)}>
                <Input name="lection" type="text" placeholder="Link to lection on youtube" onChange={(event) => setInputLection(event.target.value)} value={inputLection} />
                <Input name="presentation" type="text" placeholder="Link to presentation on drive" onChange={(event) => setInputPresentation(event.target.value)} value={inputPresentation} />
                <Input name="code" type="text" placeholder="Link to lection's code on drive" onChange={(event) => setInputCode(event.target.value)} value={inputCode} />
                <button type="submit" id="createUserButton" className="createUserButton" >Add it!</button>
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

