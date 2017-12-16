import { getBleeds } from "../util/bleed-api-util";

export const RECEIVE_BLEEDS = "RECEIVE_BLEEDS";

const receiveBleeds = bleeds => ({
  type: RECEIVE_BLEEDS,
  bleeds
});

export const fetchBleeds = () => dispatch => (
  getBleeds().then(
    bleeds => {
      dispatch(receiveBleeds(bleeds));
    }
  )
);