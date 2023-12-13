import React from 'react';
import classes from'./main.module.scss';

export default function Main({ children }) {
	return (
		<div className={classes.container}>
			<main>{children}</main>
		</div>
	);
}
