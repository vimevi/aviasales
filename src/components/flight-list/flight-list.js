import React, { useEffect, useMemo } from 'react';
import FlightItem from '../flight-item';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Spin } from 'antd';
import classes from './flight-list.module.scss';

import ticketsServiceInstance from '../../services/tickets-service';

export default function FlightList() {
	const dispatch = useDispatch();
	const displayedTicketsCount = useSelector(
		(state) => state.tickets.displayedTicketsCount
	);

	const loading = useSelector((state) => state.tickets.loading);
	const tickets = useSelector((state) => state.tickets.tickets);

	const currentFilter = useSelector((state) => state.filter.filter);

	const isNoStops = useSelector((store) => store.checkbox.noStopsChecked);
	const isOneStop = useSelector((store) => store.checkbox.oneStopChecked);
	const isTwoStops = useSelector((store) => store.checkbox.twoStopsChecked);
	const isThreeStops = useSelector((store) => store.checkbox.threeStopsChecked);

	useEffect(() => {
		ticketsServiceInstance.getTickets();
	}, []);

	const error = useSelector((state) => state.tickets.error);
	const allTicketsLoaded = useSelector((state) => state.tickets.allTicketsLoaded);

	const handleShowMore = () => {
		dispatch({ type: 'UPDATE_DISPLAY_COUNT', payload: 5 });
	};
	let maxId = 100;

	const filteredTickets = useMemo(() => {
		return tickets.filter((flight) => {
			const stopsLength = flight.segments.reduce(
				(totalStops, segment) => totalStops + segment.stops.length,
				0
			);
			return (
				(isNoStops && stopsLength === 0) ||
				(isOneStop && stopsLength === 1) ||
				(isTwoStops && stopsLength === 2) ||
				(isThreeStops && stopsLength === 3)
			);
		});
	}, [isNoStops, isOneStop, isTwoStops, isThreeStops, tickets]);

	const sortedTickets = useMemo(() => {
		return filteredTickets.slice().sort((a, b) => {
			if (currentFilter === 'cheapest') {
				return a.price - b.price;
			} else if (currentFilter === 'shortest') {
				const durationA = a.segments.reduce(
					(sum, segment) => sum + segment.duration,
					0
				);
				const durationB = b.segments.reduce(
					(sum, segment) => sum + segment.duration,
					0
				);
				return durationA - durationB;
			}
			return 0;
		});
	}, [currentFilter, filteredTickets]);

	return (
		<section>
			{error && (
				<Alert
					className={classes['filter-info']}
					showIcon={true}
					type="error"
					message={`Error: ${error}`}
				/>
			)}
			{!allTicketsLoaded && (
				<div className={classes['loading-field']}>
					<Spin></Spin> <span>Загрузка билетов</span>
				</div>
			)}
			{!loading && filteredTickets.length === 0 ? (
				<Alert
					className={classes['filter-info']}
					showIcon={true}
					defaultPadding={'8px 12px'}
					message={`Рейсов, подходящих под заданные фильтры, не найдено`}
				></Alert>
			) : loading ? (
				<div className={classes['loading-wrapper']}>
					<Spin size={'large'} />
				</div>
			) : (
				<ul>
					{sortedTickets.slice(0, displayedTicketsCount).map((flight) => (
						<FlightItem
							key={maxId++}
							price={flight.price}
							carrier={flight.carrier}
							segments={flight.segments}
						/>
					))}
					{displayedTicketsCount < sortedTickets.length && (
						<Button onClick={handleShowMore}>Показать еще 5 билетов</Button>
					)}
				</ul>
			)}
		</section>
	);
}
