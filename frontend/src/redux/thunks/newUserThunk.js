import {
  createUserRequest,
  createUserSucceeded,
  createUserFailed,
} from '../actionCreators'

function SendNewUserForm(inputEmail, inputName, selectValue) {
  return async (dispatch) => {
    dispatch(createUserRequest());
    try {
      const data = await fetch('/user/new', {
        method: "PUT",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: inputEmail,
          name: inputName, //ФИО
          password: Math.random().toString(36).substring(7),
          status: selectValue,
        }),
      });
      const response = await data.json();
      if (response.user) {
        dispatch(createUserSucceeded(response.message, response.cookie));
      } else dispatch(createUserFailed(response.message))
    }
    catch {
      dispatch(createUserFailed())
    }
  }
}

export default SendNewUserForm
