import {
  statusRequest,
  statusSucceeded,
  statusFailed,
} from '../actionCreators';

function statusCheck() {
  return async (dispatch) => {
    dispatch(statusRequest());
    try {
      const data = await fetch('/user/status');
      const response = await data.json();
      if (response.status) {
        dispatch(statusSucceeded(response.status));
      } else dispatch(statusFailed(response.message));
    }
    catch {
      dispatch(statusFailed());
    }
  };
};

export default statusCheck
