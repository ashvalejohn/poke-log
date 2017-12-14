import merge from 'lodash/merge';
import { RECEIVE_UPDATE_ERRORS } from '../actions/settings-actions';

const settingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_UPDATE_ERRORS:
            const errors = state.errors;
            return merge({}, { errors });
        default:
            return state;
    }
};

export default settingsReducer;