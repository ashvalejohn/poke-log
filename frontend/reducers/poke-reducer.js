import merge from 'lodash/merge';

import { RECEIVE_POKE } from '../actions/log-poke-actions';

const pokeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POKE:
            return merge({}, action.poke);
        default: 
            return state;
    }
};

export default pokeReducer;