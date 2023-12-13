import React from 'react';
import InfoFlightItem from '../info-flight-Item';

import classes from './flight-item.module.scss';
import logos7 from '../../assets/img/S7-logo.png';

export default function FlightItem() {
	return (
		<li>
			<div className={classes.item_inner}>
				<div className={classes.top_content}>
					<span className={classes.price}>13400 Р</span>
					<span className={classes.company_logo}>
						<img src={logos7} alt="" />
					</span>
				</div>
				<div className={classes.bottom_content}>
					<div>
						<InfoFlightItem keyText="MOW – HKT" valueText="10:45 – 08:00" />
						<InfoFlightItem keyText="MOW – HKT" valueText="11:20 – 00:50" />
					</div>
					<div>
						<InfoFlightItem keyText="В пути" valueText="21ч 15м" />
						<InfoFlightItem keyText="В пути" valueText="13ч 30м" />
					</div>
					<div>
						<InfoFlightItem keyText="2 пересадки" valueText="HKG, JNB" />
						<InfoFlightItem keyText="1 пересадка" valueText="HKG" />
					</div>
				</div>
			</div>
		</li>
	);
}
