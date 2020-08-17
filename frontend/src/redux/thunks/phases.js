import {
  getPhasesRequest, getPhasesSuccess, getPhasesFailure,
} from '../actionCreators'

function getPhases() {
  return async (dispatch) => {
    dispatch(getPhasesRequest())
    try {
      const response = await (await fetch('/data/phases')).json()
      dispatch(getPhasesSuccess(response.phases))
    }
    catch (e) {
      dispatch(getPhasesFailure(e))
    }
  }
}

export default getPhases