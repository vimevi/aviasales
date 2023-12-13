import React from 'react';
import classes from './tabs.module.scss';

export default function Tabs() {
	return (
		<section className={classes.tabs}>
			<nav>
				<div className={classes.active}>Самый дешевый</div>
				<div>Самый быстрый</div>
				<div>оптимальный</div>
			</nav>
		</section>
	);
}
