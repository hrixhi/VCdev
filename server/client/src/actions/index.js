import axios from 'axios';
import { SET_USER, GET_USER, GET_DOCTOR, GET_APTS } from './types';

export const signup = (values) => async dispatch => {
  const res = await axios.post('/auth/signup', values);
  // Access state and set logged in if no error
  // else still same and then whenever component mounts again div changes
  dispatch({ type: SET_USER, payload: res.data });
};

export const login = (values) => async dispatch => {
  const res = await axios.post('/auth/login', values);
  // Access state and set logged in if no error
  // else still same and then whenever component mounts again div changes
dispatch({ type: GET_USER, payload: res.data });
};

export const searchForDocs = (values) => async dispatch => {
  const res = await axios.post('/doc/search', values);
  // Access state and set logged in if no error
  // else still same and then whenever component mounts again div changes
dispatch({ type: GET_DOCTOR, payload: res.data });
};

export const getApts = (values) => async dispatch => {
  const res = await axios.post('/doc/apts', values);
  // Access state and set logged in if no error
  // else still same and then whenever component mounts again div changes
dispatch({ type: GET_APTS, payload: res.data });
};


