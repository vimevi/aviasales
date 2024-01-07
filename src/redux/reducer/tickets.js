const initialState = {
  searchId: null,
  tickets: [],
  loading: true,
  displayCount: 5,
  displayedTicketsCount: 5,
  allTicketsLoaded: false,
  totalExpectedTickets: 7001, // 7729
  error: null,
};

export const areAllTicketsLoaded = (state) => state.tickets.allTicketsLoaded;

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_SEARCH_ID":
      return {
        ...state,
        searchId: action.payload,
      };
    case "RECEIVE_TICKETS":
      if (action.error) {
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      }

      const updatedTickets = [...state.tickets, ...action.payload];
      return {
        ...state,
        tickets: updatedTickets,
        loading: false,
        allTicketsLoaded: updatedTickets.length >= state.totalExpectedTickets,
        error: null,
      };
    case "UPDATE_DISPLAY_COUNT":
      return {
        ...state,
        displayedTicketsCount: state.displayedTicketsCount + action.payload,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
