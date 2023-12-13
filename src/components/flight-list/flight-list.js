import React from 'react';
import FlightItem from '../flight-item';

import './flight-list.module.scss';

export default function FlightList() {
	return (
		<section>
			<ul>
				<FlightItem></FlightItem>
				<FlightItem></FlightItem>
				<FlightItem></FlightItem>
				<FlightItem></FlightItem>
			</ul>
		</section>
	);
}
