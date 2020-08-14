
const initialState = { data: [], loading: false }
export default function ViewInfo(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'GET_PHASE_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_PHASE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state, payload.name]
      }
    case 'GET_PHASE_FAILURE':
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
        data: payload.name
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
        data: payload.name
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