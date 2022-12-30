
export const SET_LENG = "SET_LENG";

export async function setLenguaje(leng) {
    return async function (dispatch) {
      try {
        return dispatch({
          type: SET_LENG,
          payload: {
            leng,
          },
        });
      } catch (e) {
        console.error("Error: " + e.message);
      }
    };
}