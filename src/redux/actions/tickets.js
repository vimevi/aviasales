const GET_TICKETS = "tickets/recieve-tickets";
const GET_SEARCHID = "tickets/recieve-searchId";
const UPDATE_DISPLAYCOUNT = "tickets/update-display-count";

export const fetchTickets = (tickets) => ({
  type: GET_TICKETS,
  payload: tickets,
});

export const fetchSearchId = (error) => ({
  type: GET_SEARCHID,
  payload: error,
});
export const updateDisplayCount = (error) => ({
  type: UPDATE_DISPLAYCOUNT,
  payload: error,
});
