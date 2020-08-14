import {
  getWeeksRequest, getWeeksSuccess, getWeeksFailure,
} from '../actionCreators'

function getWeeks(weekId) {
  return async (dispatch) => {
    dispatch(getWeeksRequest())
    try {
      const response = await (await fetch(`/data/phases/${weekId}`)).json()
      // console.log(await response.weeks)
      dispatch(getWeeksSuccess(response.weeks))
    }
    catch (e) {
      dispatch(getWeeksFailure(e))
    }
  }
}

export default getWeeks
