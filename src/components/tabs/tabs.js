import React from 'react';
import classes from './tabs.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { cheapest, shortest } from '../../redux/actions/sort';

export default function Tabs() {
	const dispatch = useDispatch();
	const currentFilter = useSelector((state) => state.filter.filter);

	return (
		<section className={classes.tabs}>
			<nav>
				<div
					className={currentFilter === 'cheapest' ? classes.active : ''}
					onClick={() => dispatch(cheapest())}
				>
					Самый Дешевый
				</div>
				<div
					className={currentFilter === 'shortest' ? classes.active : ''}
					onClick={() => dispatch(shortest())}
				>
					Самый быстрый
				</div>
			</nav>
		</section>
	);
}
