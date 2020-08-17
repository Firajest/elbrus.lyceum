import {
  logoutRequest,
  logoutRequestSuccessed,
  logoutRequestFailed,
} from '../actionCreators'

function LogoutFunc(cookie) {
  return async (dispatch) => {
    dispatch(logoutRequest());
    try {
      const data = await fetch('/user/logout', {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          cookie,
        }),
      });
      const response = await data.json();
      console.log(response);
      if (response.message === 'Successful logout') {
        dispatch(logoutRequestSuccessed(response.message, response.cookie));
      } else dispatch(logoutRequestFailed())
    }
    catch {
      dispatch(logoutRequestFailed())
    }
  }
}

export default LogoutFunc
