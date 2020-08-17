import React, { useState } from 'react'
import './weeks.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import Button from '@material-ui/core/Button';
import ShowDays from '../days/days'
import getDays from '../../redux/thunks/days'
import { chooseWeek } from '../../redux/actionCreators'

function ShowWeeks() {
  const dispatch = useDispatch()
  const weeks = useSelector((state) => {
    return state.data.weeks
  })
  console.log(weeks)

  function daysInfo(id) {
    dispatch(chooseWeek(id))
    dispatch(getDays(id))
  }

  const ButtonExampleButton = (name, id) =>
    <Button id="weekButton" className="weekButton"
      onClick={() => daysInfo(id)}>
      {name}
    </Button>
  return (
    <>
      <Router>
        <div className='weeksList'>
          <div>
            {weeks && weeks.map((week) => {
              return (
                <span >
                  <Link to="/days">
                    {ButtonExampleButton(week.name, week._id)}
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
