import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import SendMaterialsForm from '../../redux/thunks/addMaterialsThunk'
import { useDispatch, useSelector } from 'react-redux';
import { addMaterialsModalOff, clearUploadMessages } from '../../redux/actionCreators'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BeautifulButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '20px',
    color: 'rgb(63,37,166)',
  },
}))(Button);

function AddMaterialForm() {
  const handleClose = () => {
    dispatch(clearUploadMessages());
    dispatch(addMaterialsModalOff());
  };
  const materialsFlag = useSelector((state) => state.modalFlags.materialsFlag);
  const phase = useSelector((state) => state.data.phase);
  const week = useSelector((state) => state.data.week);
  const day = useSelector((state) => state.data.day);
  const dispatch = useDispatch();
  const [inputLection, setInputLection] = useState('');
  const [inputPresentation, setInputPresentation] = useState('');
  const [inputCode, setInputCode] = useState('');
  const errorMessage = useSelector((state) => state.uploadStatus.errorMessage ? state.uploadStatus.errorMessage : state.uploadStatus.message);

  function addMaterial(event) {
    event.preventDefault();
    dispatch(clearUploadMessages());
    dispatch(SendMaterialsForm(inputLection, inputPresentation, inputCode, phase, week, day));
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
        <DialogTitle id="alert-dialog-slide-title">Add new material</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div id="newUserForm">
              <h3>Instruction for lection links:</h3>
              <h4> 1) Open video on youtube and press "share" button.</h4>
              <h4> 2) Copy this link and moderate it to "youtube.com" view.</h4>
              <h4> 3) After it, add "/embed" after ".com" ... should be like this: "https://www.youtube.com/embed/watch?v=XXXXXXXX".</h4>
              <form onSubmit={(event) => addMaterial(event)}>
                <label>Link to lection on youtube:</label>
                <Input name="lection" type="text" placeholder="Link to lection on youtube" onChange={(event) => setInputLection(event.target.value)} value={inputLection} required/>
                <br/>
                <label>Link to presentation on drive:</label>
                <Input name="presentation" type="text" placeholder="Link to presentation on drive" onChange={(event) => setInputPresentation(event.target.value)} value={inputPresentation} />
                <br/>
                <label>Link to lection's code on drive:</label>
                <Input name="code" type="text" placeholder="Link to lection's code on drive" onChange={(event) => setInputCode(event.target.value)} value={inputCode} />
                <br/>
                <BeautifulButton type="submit" id="createUserButton" className="createUserButton" >Add it!</BeautifulButton>
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
export default AddMaterialForm;

