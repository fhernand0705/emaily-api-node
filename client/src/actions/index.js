import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_SURVEYS } from './types'; 

// ACTION CREATORS WITH REDUX-THUNK
export const fetchUser = () => async dispatch => {
    const getUser = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: getUser.data });
}

export const handleToken = token => async dispatch => {
    const getUser = await axios.post('/api/stripe', token); 

    dispatch({ type: FETCH_USER, payload: getUser.data});
}

export const submitSurvey = (values, history) => async dispatch => {
    const getUser = await axios.post('/api/surveys', values); 

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: getUser.data});
}

export const fetchSurveys = () => async dispatch => {
    const getSurveys = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: getSurveys.data });
}
