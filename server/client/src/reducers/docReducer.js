import { GET_DOCTOR, GET_APTS} from '../actions/types';

export default function(state = {receivedDocs: null}, action) {
  switch (action.type) {
    case GET_DOCTOR:
    console.log(action.payload)
    return {
      ...state,
      receivedDocs: action.payload
    }
    case GET_APTS:
    console.log(action.payload)
    return {
      ...state,
      apts: action.payload
    }
    default:
      return state;
  }
}