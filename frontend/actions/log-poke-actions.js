import { logPoke } from '../util/log-poke-api-util';

export const RECEIVE_POKE = 'RECEIVE_POKE';

const receivePoke = poke => ({
    type: RECEIVE_POKE,
    poke
});


