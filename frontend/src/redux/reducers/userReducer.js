import {
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, STATUS_REQUEST, STATUS_SUCCESS, STATUS_FAILURE,
  CREATEUSER_REQUEST, CREATEUSER_SUCCESS, CREATEUSER_FAILURE, CLEAR_MESSAGE, DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS, DELETE_USER_FAILURE, CLEAR_DELETE_MESSAGE, GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILURE,
} from "../actionTypes";

const initialState = {
  userStatus: '',
  message: '',
  errorMessage: '',
  allUsers: [],
};

export default function UserProps(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case STATUS_REQUEST:
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
      }
    case STATUS_SUCCESS:
      return {
        ...state,
        userStatus: payload.status,
        message: payload.message,
        errorMessage: '',
      }
    case STATUS_FAILURE:
      return {
        ...state,
        errorMessage: payload.message,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        message: 'Checking LOGOUT_REQUEST',
        errorMessage: '',
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userStatus: '',
        message: payload.message,
        errorMessage: '',
      }
    case LOGOUT_FAILURE:
      if (payload.errorMessage === 'Something went wrong') {
        return {
          ...state,
          errorMessage: payload.errorMessage,
          message: '',
          userStatus: '',
        }
      } else {
        return {
          ...state,
          errorMessage: payload.errorMessage,
          message: '',
        }
      }
    case CREATEUSER_REQUEST:
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
      }
    case CREATEUSER_SUCCESS:
      const newAllUsers = [...state.allUsers, payload.newUser];
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
        allUsers: newAllUsers,
      }
    case CREATEUSER_FAILURE:
      return {
        ...state,
        errorMessage: payload.message,
        message: ''
      }

    case DELETE_USER_REQUEST:
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
      }
    case DELETE_USER_SUCCESS:
      const newUsersArray = state.allUsers.filter((users) => users._id !== payload.id)
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
        allUsers: newUsersArray,
      }
    case DELETE_USER_FAILURE:
      return {
        ...state,
        errorMessage: payload.message,
        message: ''
      }
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: '',
        errorMessage: '',
      }
    case CLEAR_DELETE_MESSAGE:
      return {
        ...state,
        message: '',
        errorMessage: '',
      }
    case GET_ALL_USERS_REQUEST:
      return {
        ...state,
        message: 'Requesting for users\' data',
        errorMessage: '',
      }
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
        allUsers: payload.users,
      }
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        message: '',
        allUsers: [],
      }
    default:
      return state
  }
};

