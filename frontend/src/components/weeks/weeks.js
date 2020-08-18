import React from 'react'
import './weeks.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import Button from '@material-ui/core/Button';
import ShowDays from '../days/days'
import getDays from '../../redux/thunks/days'
import { chooseWeek } from '../../redux/actionCreators'
import { withStyles } from '@material-ui/core/styles';

function ShowWeeks() {
  const dispatch = useDispatch()
  const weeks = useSelector((state) => {
    return state.data.data.weeks
  })
  const chosenWeek = useSelector((state) => {
    return state.data.week
  })
  console.log(weeks)

  function daysInfo(id) {
    dispatch(chooseWeek(id))
    dispatch(getDays(id))
  }

  const WeekButton = withStyles((theme) => ({
    root: {
      backgroundColor: 'rgb(63,37,166)',
      color: 'rgb(133, 227,251)',
      marginBottom: '5%',
      borderRadius: '20px',
      marginLeft: '15%',
      height: '120px',
      width: '450px',
      fontFamily: 'Rostin',
      fontSize: '24px',
      border: '5px solid rgb(63,37,166)',
      borderRadius: '20px',
      '&:hover': {
        color: '#FFBC5B',
        backgroundColor: '#4520AB',
        border: '5px solid #FFBC5B'
      },
    },
  }))(Button);

  return (
    <>
      <Router>
        <div className='weeksList'>
          <div>
            {weeks && weeks.map((week) => {
              return (
                <span >
                  <Link to="/days">
                    <WeekButton className={chosenWeek === week._id && "active"} onClick={() => daysInfo(week._id)}>{week.name}</WeekButton>
                  </Link>
                  <br></br>
                </span>
              )
            })}
          </div>
        </div>
        <Switch>
          <Route path='/days'>
            <ShowDays></ShowDays>
          </Route>
        </Switch>
      </Router>

    </>
  )
}


export default ShowWeeks
