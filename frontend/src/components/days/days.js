import React, { useState } from 'react'
import './days.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
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

function ShowDays() {

  const dispatch = useDispatch()
  const days = useSelector((state) => {
    return state.data
  })
  console.log(days)

  const dayButt = (name) =>
    <Button id="dayButton" className="dayButton" onClick={handleClickOpen}>
      {name}
    </Button>

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className='daysList' >
        {days[2] && days[2].map((day) => {
          return (
            <Router>
              <Switch>
                <div className='dayList'>
                  {dayButt(day.name)}
                </div>
              </Switch>
            </Router>
          )
        })}
      </div>
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              <CancelIcon />
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default ShowDays
