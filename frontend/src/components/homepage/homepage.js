import React, { useEffect, useState } from 'react'
import './homepage.css'
import '../weeks/weeks.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import Button from '@material-ui/core/Button';
import ShowWeeks from '../weeks/weeks'
import getPhases from '../../redux/thunks/phases'
import { choosePhase } from '../../redux/actionCreators'
import getWeeks from '../../redux/thunks/weeks'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import getDays from '../../redux/thunks/days'


function HomePage() {
  const [view, setView] = React.useState('list');
  const handleChange = (event, nextView) => {
    setView(nextView);
  };


  const [active, setActive] = useState('')
  const phases = useSelector((state) => {
    return state.data.phases
  })
  const weeks = useSelector((state) => {
    return state.phase
  })
  useEffect(() => {
    console.log(TestButton);
    dispatch(getPhases())
    return () => {
      console.log('!!!')
    }
  }, [])
  // useEffect(() => {
  //   Te
  //   return () => {
  //     cleanup
  //   }
  // }, [weeks])


  const dispatch = useDispatch()

  function weeksInfo(id) {
    dispatch(choosePhase(id))
    dispatch(getWeeks(id))
    dispatch(getDays(id))
  }



  const TestButton = withStyles(() => ({
    root: {
      backgroundColor: 'rgb(63,37,166)',
      color: 'rgb(133, 227,251)',
      marginBottom: '5%',
      marginLeft: '10%',
      height: '120px',
      width: '450px',
      fontFamily: 'Rostin',
      fontSize: '18px',
      border: '5px solid rgb(63,37,166)',
      '&:hover': {
        color: '#FFBC5B',
        backgroundColor: '#4520AB',
        border: '5px solid #FFBC5B'
      },
      '&:active': {
        color: '#FFBC5B',
        backgroundColor: '#4520AB',
        border: '5px solid #FFBC5B'
      },
      '&:focus': {
        color: '#FFBC5B',
        backgroundColor: '#4520AB',
        border: '5px solid #FFBC5B'
      },
    },

  }),
    console.log(withStyles()))(Button);

  return (
    <>
      <div className="phaseContainer">
        <Router>
          <div className='phases'>

            {phases && phases.map((phase) => {
              return (
                <span className='weekElement' key={phase._id}>
                  <Link to={`/phases/weeks`}>

                    <TestButton className={weeks === phase._id && "active"} id={phase._id} onClick={() => weeksInfo(phase._id)}>{phase.name}</TestButton>
                  </Link>
                  <br></br>
                </span>
              )
            })}

          </div>
          <Switch>
            <Route path='/phases/weeks'>
              <ShowWeeks></ShowWeeks>
            </Route>
          </Switch>
        </Router>
      </div >
    </>
  )
}

export default HomePage


