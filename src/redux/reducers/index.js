import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import exercisesReducer from "./exercisesReducer";
import authReducer from "./authReducer";
import usersPlaceholderReducer from "./usersPlaceholderReducer";

export default combineReducers({
  exercises: exercisesReducer,
  form: formReducer,
  auth: authReducer,
  users: usersPlaceholderReducer
});
