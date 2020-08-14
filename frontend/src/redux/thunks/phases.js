import {
  getPhasesRequest, getPhasesSuccess, getPhasesFailure,
  getWeeksRequest, getWeeksSuccess, getWeeksFailure,
  getDaysRequest, getDaysSuccess, getDaysFailure,
} from '../actionCreators'

function getPhases() {
  return async (dispatch) => {
    dispatch(getPhasesRequest())
    try {
      const response = await (await fetch('/data/phases')).json()
      console.log(await response.phases)
      dispatch(getPhasesSuccess(await response.phases))
    }
    catch (e) {
      dispatch(getPhasesFailure(e))
    }
  }
}

export default getPhases