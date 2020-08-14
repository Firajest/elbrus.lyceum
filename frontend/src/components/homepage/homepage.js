import React from 'react'
import './homepage.css'
import '../weeks/weeks.css'
import { useDispatch } from 'react-redux'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ShowWeeks from '../weeks/weeks'
import ShowDays from '../days/days'
import getPhases from '../../redux/thunks/phases'

const phaseDb = [{
  phase: 'phase1'
},
{
  phase: 'phase2'
},
{
  phase: 'phase3'
}]



function HomePage() {
  const dispatch = useDispatch()
  const ButtonExampleButton = (name) =>
    <Button id="phaseButton" className="phaseButton" onClick={() => dispatch(getPhases())}>
      {name}
    </Button>
  return (
    <>
      <div className="phaseContainer">
        <Router>
          <div className='phases'>
            {phaseDb.map((phase) => {
              return (
                <span className='weekElement'>
                  <Link to="/weeks">
                    {ButtonExampleButton(phase.phase)}
                  </Link>
                  <br></br>
                </span>
              )
            })}
          </div>
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


