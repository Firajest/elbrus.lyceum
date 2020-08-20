import {
  getAllUsersRequest, getAllUsersRequestSuceeded, getAllUsersRequestFailed,
} from '../actionCreators'

function getAllUsers() {
  return async (dispatch) => {
    dispatch(getAllUsersRequest())
    try {
      const data = await fetch('/user/allUsers');
      const response = await data.json();
      if (response.message === 'Request succeeded') {
        dispatch(getAllUsersRequestSuceeded(response.users, response.message))
      }
      else dispatch(getAllUsersRequestFailed('Something went wrong'))
    }
    catch {
      dispatch(getAllUsersRequestFailed('You\'re not a chieftain'))
    }
  }
}

export default getAllUsers
