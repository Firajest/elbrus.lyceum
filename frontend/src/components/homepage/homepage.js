import React from 'react'
import './homepage.css'
import '../weeks/weeks.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import ShowWeeks from '../weeks/weeks'

const phaseDb = [{
  phase: 'phase1'
},
{
  phase: 'phase2'
},
{
  phase: 'phase3'
}]

const ButtonExampleButton = (name) =>
  <Button id="phaseButton" className="phaseButton">
    {name}
  </Button>


function HomePage() {
  return (
    <>
      <div className="phaseContainer" >
        <Router>
          {phaseDb.map((phase) => {
            return (
              <span >
                <Link to="/weeks">
                  {ButtonExampleButton(phase.phase)}
                </Link>
                <br></br>
              </span>
            )
          })}
          <Switch>
            <Route path='/weeks'>
              <ShowWeeks></ShowWeeks>
            </Route>
          </Switch>
        </Router>
      </div >
    </>
  )
}

export default HomePage


