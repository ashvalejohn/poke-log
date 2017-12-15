import * as APIUTIL from '../util/log-poke-api-util';

export const RECEIVE_POKE = 'RECEIVE_POKE';
export const RECEIVE_POKE_ERRORS = 'RECEIVE_POKE_ERRORS';

const receivePokeErrors = errors => {
  return {
    type: RECEIVE_POKE_ERRORS,
    errors: errors
  };
};
// const receivePokeErrors = errors => ({
//     type: RECEIVE_POKE_ERRORS,
//     errors: errors
// });

const receivePoke = poke => ({
    type: RECEIVE_POKE,
    poke
});

export const logPoke = (params) => dispatch => (
    APIUTIL.logPoke(params).then(
        poke => dispatch(receivePoke(poke)),
        errors => {
          return dispatch(receivePokeErrors(errors.responseJSON));
        }
    )
);
