class TicketsService {
  _baseUrl = "https://aviasales-test-api.kata.academy";
  searchId = null;

  getSearchId = async () => {
    const res = await fetch(`${this._baseUrl}/search`);
    const data = await res.json();
    this.searchId = data.searchId;
    return this.searchId;
  };

  getTickets = async (dispatch) => {
    try {
      if (!this.searchId) {
        await this.getSearchId();
      }
      const url = new URL(`${this._baseUrl}/tickets`);
      url.searchParams.set("searchId", this.searchId);

      const fetchTicketsRecursively = async (shouldContinueFetching) => {
        try {
          const ticketsResponse = await fetch(url);
          const ticketsData = await ticketsResponse.json();

          dispatch({
            type: "tickets/recieve-searchId",
            payload: this.searchId,
          });

          dispatch({
            type: "tickets/recieve-tickets",
            payload: ticketsData.tickets,
          });

          if (ticketsData.stop) {
            shouldContinueFetching(false);
          } else {
            setTimeout(fetchTicketsRecursively, 0);
          }
        } catch (error) {
          dispatch({
            type: "tickets/error",
            payload: "Ошибка при получении данных",
          });
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      };

      fetchTicketsRecursively();
    } catch (error) {
      dispatch({
        type: "tickets/recieve-searchId",
        payload: this.searchId,
      });
      dispatch({
        type: "tickets/recieve-tickets",
        payload: [],
        error: "Ошибка при получении данных",
      });
    }
  };
}

const ticketsServiceInstance = new TicketsService();

export default ticketsServiceInstance;
