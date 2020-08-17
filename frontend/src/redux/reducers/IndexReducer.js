import {
  GET_PHASES_SUCCESS, GET_PHASES_FAILURE, GET_PHASES_REQUEST, GET_WEEKS_SUCCESS, GET_WEEKS_FAILURE, GET_WEEKS_REQUEST,
  GET_DAYS_SUCCESS, GET_DAYS_FAILURE, GET_DAYS_REQUEST,
  CHOOSE_PHASE, CHOOSE_WEEK, CHOOSE_DAY,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GET_DAY_SUCCESS, GET_DAY_FAILURE, GET_DAY_REQUEST,
}
  from "../actionTypes"

const initialState = { data: [], loading: false, phase: '', week: '', day: '', singleDay: {}, userStatus: '' }
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
    case GET_DAY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_DAY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, payload.name],
        singleDay: payload
      }
    case GET_DAY_FAILURE:
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
        cookie: payload.cookie,
        message: 'STATUS_SUCCESS',
      }
    case 'STATUS_FAILURE':
      return {
        ...state,
        userStatus: '',
        message: 'STATUS_FAILURE',
      }
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
    case LOGOUT_REQUEST:
      return {
        ...state,
        message: 'Checking LOGOUT_REQUEST',
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userStatus: '',
        cookie: '',
        message: payload.message,
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        userStatus: '',
        message: 'LOGOUT_FAILURE',
      }
    default:
      return state
  }
}

