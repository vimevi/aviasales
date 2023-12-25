import Header from '../header';
import Filter from '../filter';
import Tabs from '../tabs/tabs';
import Main from '../main/main';
import FlightBox from '../flight-box/flight-box';
import FlightList from '../flight-list/flight-list';
import ticketsServiceInstance from '../../services';

import './App.module.scss'

function App() {
	ticketsServiceInstance.getSearchId()
	return (
		<div>
			<Header />
			<Main>
				<Filter />
				<FlightBox>
					<Tabs />
					<FlightList />
				</FlightBox>
			</Main>
		</div>
	);
}

export default App;
