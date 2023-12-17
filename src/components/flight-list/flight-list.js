import React from 'react';
import FlightItem from '../flight-item';

import './flight-list.module.scss';

export default function FlightList() {
	return (
		<section>
			<ul>
				{/* <FlightItem></FlightItem>
				<FlightItem></FlightItem> */}
				{tickets.map((fligh) => (
					<FlightItem price={fligh.price}></FlightItem>
				))}
			</ul>
		</section>
	);
}

const tickets = [
	{
		// Цена в рублях
		price: 16000,
		// Код авиакомпании (iata)
		carrier: 70,
		// Массив перелётов.
		// В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
		segments: [
			{
				// Код города (iata)
				origin: 25,
				// Код города (iata)
				destination: 17,
				// Дата и время вылета туда
				date: new Date(),
				// Массив кодов (iata) городов с пересадками
				stops: [12, 13, 14],
				// Общее время перелёта в минутах
				duration: 240,
			},
			{
				// Код города (iata)
				origin: 17,
				// Код города (iata)
				destination: 25,
				// Дата и время вылета обратно
				date: new Date(),
				// Массив кодов (iata) городов с пересадками
				stops: [12, 14, 16],
				// Общее время перелёта в минутах
				duration: 200,
			},
		],
	},
	{
		// Цена в рублях
		price: 18000,
		// Код авиакомпании (iata)
		carrier: 70,
		// Массив перелётов.
		// В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
		segments: [
			{
				// Код города (iata)
				origin: 25,
				// Код города (iata)
				destination: 17,
				// Дата и время вылета туда
				date: new Date(),
				// Массив кодов (iata) городов с пересадками
				stops: [12, 13, 14],
				// Общее время перелёта в минутах
				duration: 240,
			},
			{
				// Код города (iata)
				origin: 17,
				// Код города (iata)
				destination: 25,
				// Дата и время вылета обратно
				date: new Date(),
				// Массив кодов (iata) городов с пересадками
				stops: [12, 14, 16],
				// Общее время перелёта в минутах
				duration: 200,
			},
		],
	},
];
