import {
  deleteUserRequest,
  deleteUserSucceeded,
  deleteUserFailed,
  clearDeleteMessages,
} from '../actionCreators'

function deleteCurrentUser(email, status, id) {
  return async (dispatch) => {
    dispatch(deleteUserRequest())
    try {
      const userToDelete = await fetch('/user', {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email,
          status,
          id,
        }),
      })
      const response = await userToDelete.json();
      dispatch(deleteUserSucceeded(response.message, id));
      if (response.message === 'User has been deleted.') {
        dispatch(clearDeleteMessages());
      }
    }
    catch {
      dispatch(deleteUserFailed('Couldn\'t delete user.'))
    }
  }
}

export default deleteCurrentUser

