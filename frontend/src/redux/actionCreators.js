import {
  GET_PHASES_REQUEST, GET_PHASES_SUCCESS, GET_PHASES_FAILURE,
  GET_WEEKS_REQUEST, GET_WEEKS_SUCCESS, GET_WEEKS_FAILURE,
  GET_DAYS_REQUEST, GET_DAYS_SUCCESS, GET_DAYS_FAILURE
} from './actionTypes'

export function getPhasesRequest() {
  return {
    type: GET_PHASES_REQUEST,
  }
}
export function getPhasesSuccess(name) {
  return {
    type: GET_PHASES_SUCCESS,
    payload: {
      name
    }
  }
}
export function getPhasesFailure(error) {
  return {
    type: GET_PHASES_FAILURE,
    payload: {
      error
    }
  }
}

export function getWeeksRequest() {
  return {
    type: GET_WEEKS_REQUEST,
  }
}
export function getWeeksSuccess(name) {
  return {
    type: GET_WEEKS_SUCCESS,
    payload: {
      name,
    }
  }
}
export function getWeeksFailure(error) {
  return {
    type: GET_WEEKS_FAILURE,
    payload: {
      error
    }
  }
}

export function getDaysRequest() {
  return {
    type: GET_DAYS_REQUEST,
  }
}
export function getDaysSuccess(name) {
  return {
    type: GET_DAYS_SUCCESS,
    payload: {
      name,
    }
  }
}
export function getDaysFailure(error) {
  return {
    type: GET_DAYS_FAILURE,
    payload: {
      error
    }
  }
}
