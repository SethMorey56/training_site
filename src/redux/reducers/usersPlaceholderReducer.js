import _ from "lodash";

import { FETCH_PLACEHOLDER_USER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PLACEHOLDER_USER:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
