import store from "../redux/store";

class TicketsService {
  _baseUrl = "https://aviasales-test-api.kata.academy";
  searchId = null;

  getSearchId = async () => {
    const res = await fetch(`${this._baseUrl}/search`);
    const data = await res.json();
    this.searchId = data.searchId;
    return this.searchId;
  };

  getTickets = async () => {
    try {
      if (!this.searchId) {
        await this.getSearchId();
      }
      // console.log(this.searchId);
      const url = new URL(`${this._baseUrl}/tickets`);
      url.searchParams.set("searchId", this.searchId);

      let shouldContinueFetching = true;

      while (shouldContinueFetching) {
        try {
          const ticketsResponse = await fetch(url);
          const ticketsData = await ticketsResponse.json();

          store.dispatch({
            type: "tickets/recieve-searchId",
            payload: this.searchId,
          });

          store.dispatch({
            type: "tickets/recieve-tickets",
            payload: ticketsData.tickets,
          });
          console.log(store.getState());

          if (ticketsData.stop) {
            shouldContinueFetching = false;
          } else {
            setTimeout(() => this.getTickets(), 0);
            return ticketsData;
          }
        } catch (error) {
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      }
    } catch (error) {
      store.dispatch({
        type: "tickets/recieve-searchId",
        payload: this.searchId,
      });
      store.dispatch({
        type: "tickets/recieve-tickets",
        payload: [],
        error: "Ошибка при получении данных",
      });
    }
  };
}

const ticketsServiceInstance = new TicketsService();

export default ticketsServiceInstance;
