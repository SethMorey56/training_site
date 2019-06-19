import training from '../../apis/training';
// import history from '../../history';
import { FETCH_EXERCISES } from './types';

export const fetchExercises = () => async dispatch => {
    const response = await training.get('/exercise')

    dispatch({ type: FETCH_EXERCISES, payload: response.data })
}

export const createExercise = formValues => async dispatch => {
    training.post('/exercise', formValues)
}