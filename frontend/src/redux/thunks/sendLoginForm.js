import {
  statusRequest,
  statusSucceeded,
  statusFailed,
} from '../actionCreators'

function statusCheck(inputEmail, inputPassword) {
  return async (dispatch) => {
    dispatch(statusRequest());
    try {
      const data = await fetch('/user/login', {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: inputEmail,
          password: inputPassword,
        }),
      });
      const response = await data.json();
      console.log(response);
      if (response.user) {
        dispatch(statusSucceeded(response.user, response.cookie));
      } else dispatch(statusFailed())
    }
    catch {
      dispatch(statusFailed())
    }
  }
}

export default statusCheck
