import React from 'react'
import './weeks.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import ShowDays from '../days/days'
const ButtonExampleButton = (name) =>
  <Button id="weekButton" className="weekButton">
    {name}
  </Button>

const weekDb = [
  {
    week: 'week1'
  },
  {
    week: 'week2'
  },
  {
    week: 'week3'
  },
]

function ShowWeeks() {
  return (
    <>
      <div className='weeksList' >
        <Router>
          {weekDb.map((week) => {
            return (
              <span >
                <Link to="/days">
                  {ButtonExampleButton(week.week)}
                </Link>
                <br></br>
              </span>
            )
          })}
          <Switch>
            <Route path='/days'>
              <ShowDays></ShowDays>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}


export default ShowWeeks