import {
  logoutRequest,
  logoutRequestSuccessed,
  logoutRequestFailed,
} from '../actionCreators'

function LogoutFunc() {
  return async (dispatch) => {
    dispatch(logoutRequest());
    try {
      const data = await fetch('/user/logout', {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          // cookie,
        }),
      });
      const response = await data.json();
      console.log(response);
      if (response.message === 'Successful logout') {
        dispatch(logoutRequestSuccessed(response.message));
      } else dispatch(logoutRequestFailed(response.message))
    }
    catch {
      dispatch(logoutRequestFailed('Cannot log out'))
    }
  }
}

export default LogoutFunc
