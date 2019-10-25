import training from "../../apis/training";
import jsonPlaceholder from "../../apis/jsonPlaceholder";
// import history from '../../history';
import { FETCH_EXERCISES, FETCH_USERS } from "./types";
import { SIGN_IN, SIGN_OUT } from "./types";
import { FETCH_PLACEHOLDER_USER } from "./types";

export const fetchExercises = () => async dispatch => {
  const response = await training.get("/exercise");

  dispatch({ type: FETCH_EXERCISES, payload: response.data });
};

export const createExercise = formValues => async dispatch => {
  training.post("/exercise", formValues);
};

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
  const response = await training.post("/REST-API");

  dispatch({ type: SIGN_IN, payload: response.data });
};

// placeholder user actions
export const fetchUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get("/users");

  dispatch({ type: FETCH_PLACEHOLDER_USER, payload: response.data });
};

// posting to create user route

export const createClient = (formValues) => async dispatch => {
  training.post("/newClient", formValues)
}