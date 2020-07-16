import axios from 'axios';
import { FETCH_USER } from './types';

// ACTION CREATOR WITH REDUX-THUNK
export const fetchUser = () => async dispatch => {
    const getUser = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: getUser.data });
}
