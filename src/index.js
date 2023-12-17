import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/App';

import { Provider } from 'react-redux';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

const getSearchId = async () => {
	try {
		const res = await fetch(`https://aviasales-test-api.kata.academy/search`);
		const data = await res.json();
		console.log(data);
		console.log('Search ID:', data.searchId);

		const ticketsResponse = await fetch(
			`https://aviasales-test-api.kata.academy/tickets?searchId=${data.searchId}`
		);
		console.log('Tickets:', ticketsResponse);

		return ticketsResponse;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw error;
	}
};

getSearchId();
