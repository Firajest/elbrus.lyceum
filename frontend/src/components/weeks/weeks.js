import React from 'react'
import './weeks.css'
import {
  Link, BrowserRouter as Router, Route,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import ShowDays from '../days/days'
import getDays from '../../redux/thunks/days'
import { chooseWeek } from '../../redux/actionCreators'
import WeekButton from './WeekButton'

function ShowWeeks() {
  const dispatch = useDispatch()
  const weeks = useSelector((state) => {
    return state.data.data.weeks
  })
  const chosenWeek = useSelector((state) => {
    return state.data.week
  })
  function daysInfo(id) {
    dispatch(chooseWeek(id))
    dispatch(getDays(id))
  }

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
        <Route path='/days'>
          <ShowDays></ShowDays>
        </Route>
      </Router>
    </>
  )
}


export default ShowWeeks
