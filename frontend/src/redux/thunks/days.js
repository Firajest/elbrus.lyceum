import {
  getDaysRequest, getDaysSuccess, getDaysFailure,
} from '../actionCreators';

function getDays(weekId) {
  return async (dispatch) => {
    dispatch(getDaysRequest());
    try {
      const response = await (await fetch(`/data/week/${weekId}`)).json();
      dispatch(getDaysSuccess(response.days));
    }
    catch (e) {
      dispatch(getDaysFailure(e));
    }
  };
};

export default getDays
