import React, { useEffect } from 'react'
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

import { withStyles } from '@material-ui/core/styles';

import getDays from '../../redux/thunks/days'


function HomePage() {
  const dispatch = useDispatch()
  const phases = useSelector((state) => {
    return state.data.data.phases
  })
  const weeks = useSelector((state) => {
    return state.data.phase
  })
  useEffect(() => {
    dispatch(getPhases())
    return () => {
      console.log('!!!')
    }
  }, [dispatch])


  function weeksInfo(id) {
    dispatch(choosePhase(id))
    dispatch(getWeeks(id))
    dispatch(getDays(id))
  }

  const PhaseButton = withStyles((theme) => ({
    root: {

      backgroundColor: 'rgb(63,37,166)',
      color: 'rgb(133, 227,251)',
      // marginBottom: '5%',
      borderRadius: '20px',
      margin: '5px',
      height: '85.3px',
      width: '450px',
      fontFamily: 'Rostin',
      fontSize: '18px',
      border: '5px solid rgb(63,37,166)',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '5%',
        width: '90%',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        // marginLeft: '25%',
        width: '90%'
      },
      '&:hover': {
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
                    <PhaseButton className={weeks === phase._id && "active"} id={phase._id} onClick={() => weeksInfo(phase._id)}>{phase.name}</PhaseButton>
                  </Link>
                  <br></br>
                </span>
              )
            })}
          </div>
          <Route path='/phases/weeks'>
            <ShowWeeks></ShowWeeks>
          </Route>
        </Router>
      </div >
    </>
  )
}

export default HomePage


