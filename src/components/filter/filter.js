import React, { useState } from 'react';
import Checkbox from './checkbox';

import classes from './filter.module.scss';

export default function Filter() {
	const [allChecked, setAllChecked] = useState(true);
	const [noStopsChecked, setNoStopsChecked] = useState(true);
	const [oneStopChecked, setOneStopChecked] = useState(true);
	const [twoStopsChecked, setTwoStopsChecked] = useState(true);
	const [threeStopsChecked, setThreeStopsChecked] = useState(true); // перенести логику в resux

	return (
		<aside>
			<h2 className={classes.title}>Количество пересадок</h2>
			<form>
				<Checkbox
					checked={allChecked}
					onChange={() => setAllChecked((c) => !c)}
				>
					Все
				</Checkbox>
				<Checkbox
					checked={noStopsChecked}
					onChange={() => setNoStopsChecked((c) => !c)}
				>
					Без пересадок
				</Checkbox>
				<Checkbox
					checked={oneStopChecked}
					onChange={() => setOneStopChecked((c) => !c)}
				>
					1 пересадка
				</Checkbox>
				<Checkbox
					checked={twoStopsChecked}
					onChange={() => setTwoStopsChecked((c) => !c)}
				>
					2 пересадки
				</Checkbox>
				<Checkbox
					checked={threeStopsChecked}
					onChange={() => setThreeStopsChecked((c) => !c)}
				>
					3 пересадки
				</Checkbox>
			</form>
		</aside>
	);
}
