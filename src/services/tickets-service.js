import store from '../redux/store';

class TicketsService {
	_baseUrl = 'https://aviasales-test-api.kata.academy';
	tickets = [];
	searchId = null;

	getSearchId = async () => {
		try {
			const res = await fetch(`${this._baseUrl}/search`);
			const data = await res.json();
			this.searchId = data.searchId;
			return this.searchId;
		} catch (error) {
			throw error;
		}
	};

	getTickets = async () => {
		try {
			if (!this.searchId) {
				await this.getSearchId();
			}

			const url = new URL(`${this._baseUrl}/tickets`);
			url.searchParams.set('searchId', this.searchId);

			const retryAttempts = 3;
			let currentAttempt = 1;

			while (currentAttempt <= retryAttempts) {
				try {
					const ticketsResponse = await fetch(url);
					const ticketsData = await ticketsResponse.json();

					this.tickets.push(...ticketsData.tickets);

					store.dispatch({ type: 'RECEIVE_SEARCH_ID', payload: this.searchId });
					store.dispatch({
						type: 'RECEIVE_TICKETS',
						payload: ticketsData.tickets,
					});

					if (!ticketsData.stop) {
						setTimeout(() => this.getTickets(), 0);
					}

					// console.log(ticketsData.stop);
					// console.log('Билеты:', this.tickets);

					return ticketsData;
				} catch (error) {
					currentAttempt++;

					if (currentAttempt <= retryAttempts) {
						await new Promise((resolve) => setTimeout(resolve, 1000));
					}
				}
			}

			return { error: 'Достигнуто максимальное количество повторных попыток.' };
		} catch (error) {

			store.dispatch({ type: 'RECEIVE_SEARCH_ID', payload: this.searchId });
			store.dispatch({
				type: 'RECEIVE_TICKETS',
				payload: [],
				error: 'Ошибка при получении данных',
			});
		}
	};
}

const ticketsServiceInstance = new TicketsService();

export default ticketsServiceInstance;
