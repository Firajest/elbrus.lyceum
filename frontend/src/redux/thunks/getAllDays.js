import {
  getAllDaysRequest, getAllDaysSuccess, getAllDaysFailure,
} from '../actionCreators';

function getAllDays() {
  return async (dispatch) => {
    dispatch(getAllDaysRequest());
    try {
      const response = await (await fetch('/data/alldays')).json();
      dispatch(getAllDaysSuccess(response.allDays));
    }
    catch (e) {
      dispatch(getAllDaysFailure(e));
    }
  };
};

export default getAllDays
