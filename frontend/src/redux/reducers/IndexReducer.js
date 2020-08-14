import { GET_PHASES_SUCCESS, GET_PHASES_FAILURE, GET_PHASES_REQUEST } from "../actionTypes"

const initialState = { data: [], loading: false }
export default function ViewInfo(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_PHASES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_PHASES_SUCCESS:
      console.log(payload)
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.name]
      }
    case GET_PHASES_FAILURE:
      return {
        ...state,
        loading: false
      }
    case 'GET_WEEKS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_WEEKS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.name]
      }
    case 'GET_WEEKS_FAILURE':
      return {
        ...state,
        loading: false
      }
    case 'GET_DAYS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_DAYS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.name]
      }
    case 'GET_DAYS_FAILURE':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}