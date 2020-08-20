import {
  createUserRequest,
  createUserSucceeded,
  createUserFailed,
  clearMessages,
} from '../actionCreators'

function SendNewUserForm(inputName, inputEmail, selectValue) {
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
        dispatch(createUserSucceeded(response.message, response.user));
        // dispatch(clearMessages());
      } else dispatch(createUserFailed(response.message));
    }
    catch {
      dispatch(createUserFailed('Something has been broken'))
    }
  }
}

export default SendNewUserForm
