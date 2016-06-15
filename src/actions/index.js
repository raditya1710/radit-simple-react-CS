import axios from 'axios';

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER_WITH_ID = 'FETCH_USER_WITH_ID';
export const DELETE_USER = 'DELETE_USER';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=raditsimplereactcs';

export function fetchUsers(){
  const URLrequest = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type : FETCH_USERS,
    payload : URLrequest
  };
}
