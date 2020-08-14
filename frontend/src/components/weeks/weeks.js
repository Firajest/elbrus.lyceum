import React from 'react'
import './weeks.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import Button from '@material-ui/core/Button';
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
      <Router>
        <div className='weeksList'>
          <div>
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
