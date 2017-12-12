import { login, signup } from '../util/session-api-util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
})

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
})

export const loginUser = user => dispatch => (
  login(user).then(
    currentUser => (
      dispatch(receiveCurrentUser(currentUser))
    ),
    error => (
      dispatch(receiveErrors(errors.responseJSON))
    ),
  )
)

export const signupUser = user => dispatch => (
  signup(user).then(
    currentUser => (
      dispatch(receiveCurrentUser(currentUser))
    ),
    error => (
      dispatch(receiveSessionErrors(errors.responseJSON))
    ),
  )
)