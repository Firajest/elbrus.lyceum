import React, { useEffect } from 'react'
import './homepage.css'
import '../weeks/weeks.css'
import { useDispatch, useSelector, } from 'react-redux'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import ShowWeeks from '../weeks/weeks'
import { ReactReduxContext } from 'react-redux'
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
  const phases = useSelector((state) => {
    console.log(state.data)
    return state.data
  })
  useEffect(() => {
    dispatch(getPhases())
    return () => {
      console.log('!!!')
    }
  }, [])
  console.log(phases[0])
  const dispatch = useDispatch()
  const ButtonExampleButton = (name) =>
    <Button id="phaseButton" className="phaseButton" >
      {name}
    </Button>
  return (
    <>
      <div className="phaseContainer">
        <Router>
          <div className='phases'>
            {phases[0] && phases[0].map((phase) => {
              return (
                <span className='weekElement'>
                  <Link to={`/${phase.name}/weeks`}>
                    {ButtonExampleButton(phase.name)}
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


