import {
  GET_PHASES_SUCCESS, GET_PHASES_FAILURE, GET_PHASES_REQUEST, GET_WEEKS_SUCCESS, GET_WEEKS_FAILURE, GET_WEEKS_REQUEST,
  GET_DAYS_SUCCESS, GET_DAYS_FAILURE, GET_DAYS_REQUEST,
  CHOOSE_PHASE, CHOOSE_WEEK, CHOOSE_DAY
} from "../actionTypes"

const initialState = { data: [], loading: false, phase: '', week: '', day: '', userStatus: ''}
export default function ViewInfo(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_PHASES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_PHASES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.name],
      }
    case GET_PHASES_FAILURE:
      return {
        ...state,
        loading: false
      }
    case GET_WEEKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_WEEKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.name]
      }
    case GET_WEEKS_FAILURE:
      return {
        ...state,
        loading: false
      }
    case GET_DAYS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_DAYS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.name]
      }
    case GET_DAYS_FAILURE:
      return {
        ...state,
        loading: false
      }
      case 'STATUS_REQUEST':
      return {
        ...state,
        userStatus: '',
        message: 'Checking status',
      }
      case 'STATUS_SUCCESS':
      return {
        ...state,
        userStatus: payload.status,
        message: 'STATUS_SUCCESS',
      }
      case 'STATUS_FAILURE':
      return {
        ...state,
        userStatus: '',
        message: 'STATUS_FAILURE',
    case CHOOSE_PHASE:
      return {
        ...state,
        phase: payload.id
      }
    case CHOOSE_WEEK:
      return {
        ...state,
        week: payload.id
      }
    case CHOOSE_DAY:
      return {
        ...state,
        day: payload.id
      }
    default:
      return state
  }
}
