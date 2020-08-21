import {
  UPLOADING_REQUEST, UPLOADING_SUCCESS, UPLOADING_FAILURE, CLEAR_UPLOAD_MESSAGE
} from "../actionTypes";

const initialState = {
  uploadStatus: '',
  message: '',
  errorMessage: '',
};

export default function UploadStatus(state = initialState, action) {
  const { type } = action
  switch (type) {
    case UPLOADING_REQUEST:
      return {
        ...state,
        uploadStatus: 'Uploading...'
      }
    case UPLOADING_SUCCESS:
      return {
        ...state,
        uploadStatus: '',
        message: action.message,
        errorMessage: '',
      }
    case UPLOADING_FAILURE:
      return {
        ...state,
        uploadStatus: '',
        message: '',
        errorMessage: action.errorMessage,
      }
    case CLEAR_UPLOAD_MESSAGE:
      return {
        ...state,
        uploadStatus: '',
        message: '',
        errorMessage: '',
      }

    default:
      return state
  }
};
