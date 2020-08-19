import {
  
} from "../actionTypes"

const initialState = {
  uploadStatus: '',
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

    default:
      return state
  }
}
