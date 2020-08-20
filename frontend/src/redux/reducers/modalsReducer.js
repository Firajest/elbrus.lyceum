import {
  LOGIN_MODAL_FLAG_ON,
  LOGIN_MODAL_FLAG_OFF,
  NEWUSER_MODAL_FLAG_ON,
  NEWUSER_MODAL_FLAG_OFF,
  ADD_MATERIALS_MODAL_FLAG_ON,
  ADD_MATERIALS_MODAL_FLAG_OFF,
} from "../actionTypes";

const initialState = {
  loginFlag: false,
  newUserFlag: false,
  materialsFlag: false,
};

export default function ModalFlags(state = initialState, action) {
  const { type } = action
  switch (type) {

    case LOGIN_MODAL_FLAG_ON:
      return {
        ...state,
        loginFlag: true,
      }
    case LOGIN_MODAL_FLAG_OFF:
      return {
        ...state,
        loginFlag: false,
      }
    case NEWUSER_MODAL_FLAG_ON:
      return {
        ...state,
        newUserFlag: true,
      }
    case NEWUSER_MODAL_FLAG_OFF:
      return {
        ...state,
        newUserFlag: false,
      }
    case ADD_MATERIALS_MODAL_FLAG_ON:
      return {
        ...state,
        materialsFlag: true,
      }
    case ADD_MATERIALS_MODAL_FLAG_OFF:
      return {
        ...state,
        materialsFlag: false,
      }
    default:
      return state
  }
};
