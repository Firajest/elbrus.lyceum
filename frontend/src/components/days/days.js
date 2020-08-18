import React, { useState } from 'react'
import './days.css'
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CancelIcon from '@material-ui/icons/Cancel';
import Link from '@material-ui/core/Link';
import { chooseDay } from '../../redux/actionCreators';
import getDays from '../../redux/thunks/days';
import getDay from '../../redux/thunks/day';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TestButton = withStyles((theme) => ({
  root: {
    backgroundColor: 'rgb(63,37,166)',
    color: 'rgb(133, 227,251)',
    marginBottom: '5%',
    marginLeft: '20%',
    height: '75px',
    width: '450px',
    fontFamily: 'Rostin',
    fontSize: '18px',
    order: '5px solid rgb(63,37,166)',
    '&:hover': {
      color: '#FFBC5B',
      backgroundColor: '#4520AB',
      border: '3px solid #FFBC5B'
    },
  },
}))(Button);

const ButtonInModal = withStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '20px',
    color: 'rgb(63,37,166)',
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Rostin',
    fontSize: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ShowDays() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const days = useSelector((state) => {
    return state.data.days
  })
  const singleDay = useSelector((state) => {
    return state.singleDay
  })


  const dayButt = (day) =>
    <Button id="dayButton" className="dayButton" onClick={() => handleClickOpen(day)}>
      {day.name}
    </Button>

  const [open, setOpen] = React.useState(false);

  function handleClickOpen(day) {
    console.log(day);
    dispatch(getDay(day._id))
    dispatch(chooseDay(day._id))
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className='daysList' >
        {days && days.map((day) => {
          return (
            <Router>
              <Switch>
                <div className='dayList'>
                  <TestButton className={singleDay._id === day._id && "active"}
                    onClick={() => handleClickOpen(day)}>{day.name}</TestButton>
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
          <DialogTitle id="alert-dialog-slide-title"><strong>{singleDay.name}</strong></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <iframe width="560" height="315" src={singleDay.linkYT} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
              <div className={classes.root}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                  <Link className="buttoninmodal" href={singleDay.linkPres}><ButtonInModal className="buttoninmodal">Презентация</ButtonInModal></Link>
                  {singleDay.linkFile === 'none yet' ? <></> : <Link className="buttoninmodal" href={singleDay.linkFile}><ButtonInModal className="buttoninmodal">Код лекции</ButtonInModal></Link>}
                </ButtonGroup>
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
      </div>
    </>
  )
}

export default ShowDays
