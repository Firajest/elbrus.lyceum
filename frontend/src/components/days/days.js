import React from 'react'
import './days.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
const dayButt = (name) =>
  <Button id="dayButton" className="dayButton">
    {name}
  </Button>

const dayDb = [
  {
    day: 'day1'
  },
  {
    day: 'day2'
  },
  {
    day: 'day3'
  },
  {
    day: 'day4'
  },
  {
    day: 'day5'
  },
  {
    day: 'day6'
  },
  {
    day: 'day7'
  },
]

function ShowDays() {
  return (
    <>
      <div className='daysList' >
        {dayDb.map((day) => {
          return (
            <Router>
              <Switch>
                <div className='dayList'>
                  {dayButt(day.day)}
                </div>
              </Switch>
            </Router>
          )
        })}
      </div>
    </>
  )
}

export default ShowDays