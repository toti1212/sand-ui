import {
	lightGray,
	secondary,
	primary,
	yellow,
	red,
	green,
	blue
} from '../globals/colors';

import { StyleSheet } from 'aphrodite';

function progressBarGenerator(color) {
	return {
		backgroundColor: color,
		margin: 0,
		height: '100%',
		transition: 'width 0.5s ease'
	};
}


export default StyleSheet.create({
	wrapper: {
		backgroundColor: lightGray,
		width: '100%',
		height: 12,
		borderRadius: 32,
		padding: 0,
		overflow: 'hidden'
	},
	default: progressBarGenerator(secondary),
	inverse: progressBarGenerator(primary),
	warning: progressBarGenerator(yellow),
	danger: progressBarGenerator(red),
	success: progressBarGenerator(green),
	info: progressBarGenerator(blue)
});