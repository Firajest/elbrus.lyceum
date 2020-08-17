import {
  getDayRequest, getDaySuccess, getDayFailure,
} from '../actionCreators'

function getDay(dayId) {
  return async (dispatch) => {
    dispatch(getDayRequest())
    try {
      const response = await (await fetch(`/data/day/${dayId}`)).json()
      console.log(await response.day)
      dispatch(getDaySuccess(response.day))
    }
    catch (e) {
      dispatch(getDayFailure(e))
    }
  }
}

export default getDay
