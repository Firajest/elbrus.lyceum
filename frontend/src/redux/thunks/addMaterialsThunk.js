import {
  
} from '../actionCreators'

function SendMaterialsForm(lection, presentation, code) {
  return async (dispatch) => {
    dispatch(uploadingMaterialStarts());
    try {
      const data = await fetch('/data/newMaterials', {
        method: "PUT",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          lection,
          presentation,
          code,
        }),
      });
      const response = await data.json();
      console.log(response);
      if (response.) {
        dispatch(uploadingMaterialSuceeded(response.user.status, response.message));
      } else dispatch(uploadingMaterialFailed(response.message))
    }
    catch {
      dispatch(uploadingMaterialFailed('Oooops, something went wrong...'))
    }
  }
}

export default SendMaterialsForm
