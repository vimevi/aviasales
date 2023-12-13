import React from 'react';

import classes from './info-flight-Item.module.scss';

export default function InfoFlightItem({ keyText, valueText }) {
	return (
		<div className={classes['info-item']}>
			<span className={classes['item-key']}>{keyText}</span>
			<span className={classes['item-value']}>{valueText}</span>
		</div>
	);
}
