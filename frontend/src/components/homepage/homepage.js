import React, { useEffect } from 'react'
import './homepage.css'
import '../weeks/weeks.css'
import {
  Link, BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import ShowWeeks from '../weeks/weeks'
import getPhases from '../../redux/thunks/phases'
import { choosePhase } from '../../redux/actionCreators'
import getWeeks from '../../redux/thunks/weeks'
import getAllDays from '../../redux/thunks/getAllDays'
import PhaseButton from './PhaseButton'
import getDays from '../../redux/thunks/days'


function HomePage(props) {
  const dispatch = useDispatch()
  const phases = useSelector((state) => {
    return state.data.data.phases
  })
  const weeks = useSelector((state) => {
    return state.data.phase
  })
  const flag = useSelector((state) => {
    return state.data.flag
  })
  console.log('flag:' + flag);

  useEffect(() => {
    dispatch(getPhases())
    dispatch(getAllDays())
    return () => {
      console.log('!!!')
    }
  }, [dispatch])
  function weeksInfo(id) {
    dispatch(choosePhase(id))
    dispatch(getWeeks(id))
    dispatch(getDays(id))
  }

  return (
    <>
      {flag === true ?
        <>
        </>
        :
        <>
          <div className="phaseContainer">
            <Router>
              <div className='phases'>

                {phases && phases.map((phase) => {
                  return (
                    <span className='weekElement' key={phase._id}>
                      <Link to={`/phases/weeks`}>
                        <PhaseButton className={weeks === phase._id && "active"} id={phase._id} onClick={() => weeksInfo(phase._id)}>{phase.name}</PhaseButton>
                      </Link>
                      <br></br>
                    </span>
                  )
                })}
              </div>
              <Route path='/phases/weeks'>
                <ShowWeeks></ShowWeeks>
              </Route>
            </Router>
          </div >
        </>}

    </>
  )
}

export default HomePage


