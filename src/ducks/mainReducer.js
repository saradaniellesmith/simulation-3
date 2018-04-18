import axios from 'axios';

const EDIT_SONG = "EDIT_SONG";

const initialState = {
    song: []
}

export function editSong() {
    return {
        type: EDIT_SONG,
        payload: axios
          .put("/song", {

          })
          .then(res => {
              return res.data;
          })
    }
}


export default function reducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {


     
      case `${EDIT_SONG}_PENDING`:
        return Object.assign({}, state, { isLoading: true });
  
      case `${EDIT_SONG}_FULFILLED`:
        console.log(action.payload);
        return Object.assign({}, state, {
          isLoading: false,
          song: action.payload
        });
  
      case `${EDIT_SONG}_REJECTED`:
        return Object.assign({}, state, {
          isLoading: false,
          didErr: true,
          errMessage: action.payload
        });

    default:
      return state;
  }
}
  