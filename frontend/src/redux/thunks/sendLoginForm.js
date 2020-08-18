import {
  statusRequest,
  statusSucceeded,
  statusFailed,
} from '../actionCreators'

function SendLoginForm(inputEmail, inputPassword) {
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
        dispatch(statusSucceeded(response.user.status, response.message));
      } else dispatch(statusFailed(response.message))
    }
    catch {
      dispatch(statusFailed('Oooops, something went wrong...'))
    }
  }
}

export default SendLoginForm
