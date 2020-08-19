import {
  LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, STATUS_REQUEST, STATUS_SUCCESS, STATUS_FAILURE, CREATEUSER_REQUEST, CREATEUSER_SUCCESS, CREATEUSER_FAILURE, CLEAR_MESSAGE,
} from "../actionTypes"

const initialState = {
  userStatus: '',
  message: '',
  errorMessage: '',
}
export default function UserProps(state = initialState, action) {
  const { type, payload } = action
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
      return {
        ...state,
        errorMessage: payload.errorMessage,
        message: '',
      }
    case CREATEUSER_REQUEST:
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
      }
    case CREATEUSER_SUCCESS:
      return {
        ...state,
        message: payload.message,
        errorMessage: '',
      }
    case CREATEUSER_FAILURE:
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

    default:
      return state
  }
}
