import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../actions/booking_actions';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return Object.assign(newState, action.bookings);
    case RECEIVE_BOOKING:
      return Object.assign(newState, {[action.booking.id]: action.booking});
    case REMOVE_BOOKING:
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;