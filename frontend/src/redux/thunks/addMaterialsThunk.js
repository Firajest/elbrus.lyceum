import {
  uploadingMaterialStarts, uploadingMaterialSuceeded, uploadingMaterialFailed
} from '../actionCreators';

function SendMaterialsForm(lection, presentation, code, phaseID, weekID, dayID) {
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
          phase: phaseID,
          week: weekID,
          day: dayID,
        }),
      });
      const response = await data.json();
      console.log(response);
      if (response.message === 'Materials has been added') {
        dispatch(uploadingMaterialSuceeded(response.message));
      } else dispatch(uploadingMaterialFailed(response.errorMessage));
    }
    catch {
      dispatch(uploadingMaterialFailed('Oooops, something went wrong...'));
    };
  };
};

export default SendMaterialsForm
