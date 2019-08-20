import training from '../../apis/training';
// import history from '../../history';
import { FETCH_EXERCISES } from './types';
import { SIGN_IN, SIGN_OUT } from './types';

export const fetchExercises = () => async dispatch => {
    const response = await training.get('/exercise')

    dispatch({ type: FETCH_EXERCISES, payload: response.data })
}

export const createExercise = formValues => async dispatch => {
    training.post('/exercise', formValues)
}

// export const signIn = () => {
//     return {
//         type: 'SIGN_IN'
//     }
// }

// export const signOut = () => {
//     return {
//         type: 'SIGN_OUT'
//     }
// }

export const signIn = () => async dispatch => {
    const response = await training.post('/createClient')

    dispatch({ type: SIGN_IN, payload: response.data })
}
