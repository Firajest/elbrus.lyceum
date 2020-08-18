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

function HomePage() {
  const phases = useSelector((state) => {
    return state.data
  })
  const weeks = useSelector((state) => {
    return state.phase
  })
  useEffect(() => {
    dispatch(getPhases())
    return () => {
      console.log('!!!')
    }
  }, [])


  const dispatch = useDispatch()

  function weeksInfo(id) {
    dispatch(choosePhase(id))
    dispatch(getWeeks(id))
  }

  const ButtonExampleButton = (name, id) =>
    <Button id="phaseButton" className="phaseButton"
      onClick={() => weeksInfo(id)}>
      {name}
    </Button>

  return (
    <>
      <div className="phaseContainer">
        <Router>
          <div className='phases'>
            {phases[0] && phases[0].map((phase) => {
              return (
                <span className='weekElement' key={phase._id}>
                  <Link to={`/phases/weeks`}>

                    {ButtonExampleButton(phase.name, phase._id)}
                  </Link>
                  <br></br>
                </span>
              )
            })}
          </div>
          <Switch>
            <Route path='/phases/weeks'>
              <ShowWeeks></ShowWeeks>
            </Route>
          </Switch>
        </Router>
      </div >
    </>
  )
}

export default HomePage


