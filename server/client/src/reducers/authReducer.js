import { GET_USER, SET_USER } from '../actions/types';

export default function(state = {status: null}, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        status: action.payload.status
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
        status: action.payload.status
      }
    default:
      return state;
  }
}