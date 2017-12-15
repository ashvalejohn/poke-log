import { getPokes } from '../util/poke-log-api-util';

export const RECEIVE_POKES = 'RECEIVE_POKES';

const receivePokes = pokes => ({
  type: RECEIVE_POKES,
  pokes
});

export const fetchPokes = date => dispatch => (
  getPokes(date).then(
    pokes => {
      dispatch(receivePokes(pokes));
    }
  )
);
