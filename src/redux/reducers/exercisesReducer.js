import _ from 'lodash';

import {
    FETCH_EXERCISES
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_EXERCISES:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    }
}