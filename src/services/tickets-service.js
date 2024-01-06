import store from '../redux/store';

class ticketsService {
	_baseUrl = 'https://aviasales-test-api.kata.academy';
	tickets = [];
	getSearchId = async () => {
		try {
			const res = await fetch(`${this._baseUrl}/search`);
			const data = await res.json();
			console.log('Search ID:', data.searchId);
			return data.searchId;
		} catch (error) {
			console.error('Error fetching data:', error);
			throw error;
		}
	};
	getTickets = async () => {
		try {
			const searchId = await this.getSearchId();
			const url = new URL(`${this._baseUrl}/tickets`);
			url.searchParams.set('searchId', searchId);
			const ticketsResponse = await fetch(url);
			const ticketsData = await ticketsResponse.json();
			this.tickets.push(ticketsData.tickets);

			store.dispatch({ type: 'RECEIVE_SEARCH_ID', payload: searchId });
			store.dispatch({ type: 'RECEIVE_TICKETS', payload: ticketsData.tickets });

			if (ticketsData.stop) setTimeout(() => this.getTickets(), 2000);
			console.log(ticketsData.stop);
			console.log('Tickets:', this.tickets);

			return ticketsData;
		} catch (e) {
			console.log(e);
		}
	};
}

const ticketsServiceInstance = new ticketsService();

export default ticketsServiceInstance;
