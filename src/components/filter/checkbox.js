import classes from './filter.module.scss';

export default function Checkbox({ children, checked, onChange }) {
	return (
		<label>
			<input
				checked={checked}
				className={classes.check_input}
				type="checkbox"
				onChange={onChange}
			/>
			<span className={classes.check_box}></span>
			{children}
		</label>
	);
}
