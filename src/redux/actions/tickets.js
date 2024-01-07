const FETCH_TICKETS_SUCCESS = "tickets/fetchSuccess";
const FETCH_TICKETS_FAILURE = "tickets/fetchFailure";

export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets,
});

export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error,
});
