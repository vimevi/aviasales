import React from 'react';

import classes from './flight-box.module.scss';

export default function FlightBox({ children }) {
	return <div className={classes.flightbox_container}>{children}</div>;
}
