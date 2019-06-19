import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import exercisesReducer from './exercisesReducer';

export default combineReducers({
    exercises: exercisesReducer,
    form: formReducer
});