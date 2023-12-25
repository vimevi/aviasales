class ticketsService {
	_baseUrl = 'https://aviasales-test-api.kata.academy';
	getSearchId = async () => {
		try {
			const res = await fetch(`${this._baseUrl}/search`);
			const data = await res.json();
			console.log('Search ID:', data.searchId);

			const url = new URL(`${this._baseUrl}/tickets`);
			url.searchParams.set('searchId', data.searchId);
			const ticketsResponse = await fetch(url);

			const ticketsData = await ticketsResponse.json();
			console.log('Tickets:', ticketsData);

			return ticketsData;
		} catch (error) {
			console.error('Error fetching data:', error);
			throw error;
		}
	};
}

const ticketsServiceInstance = new ticketsService();

export default ticketsServiceInstance;
