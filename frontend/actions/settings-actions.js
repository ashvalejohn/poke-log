import * as APIUtil from '../util/settings-api-util';

import { RECEIVE_CURRENT_USER, receiveCurrentUser } from './session-actions';

export const RECEIVE_UPDATE_ERRORS = "RECEIVE_UPDATE_ERRORS";


const receiveUpdateErrors = errors => ({
    type: RECEIVE_UPDATE_ERRORS,
    errors
});

export const updateUser = user => dispatch => (
    APIUtil.updateUser(user).then(
        currentUser => (
            dispatch(receiveCurrentUser(currentUser))
        ),
        errors => (
            dispatch(receiveUpdateErrors(errors.responseJSON))
        )
    )
);


