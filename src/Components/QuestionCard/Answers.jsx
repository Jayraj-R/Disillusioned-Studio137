import * as React from 'react';
import { Grid } from '@mui/material';
import styles from '../../stylesheets/questionCard.module.css';
import AnswerSlider from '../helper/Slider';

const Answers = () => {
	const marks = [
		{
			value: 0,
			label: 'Strongly Disagree',
		},
		{
			value: 25,
			label: 'Disagree',
		},
		{
			value: 50,
			label: 'Neutral',
		},
		{
			value: 75,
			label: 'Agree',
		},

		{
			value: 100,
			label: 'Strongly Agree',
		},
	];

	return (
		<Grid container xs={12} px={15} py={6} className={styles.answer__container}>
			<AnswerSlider
				aria-label='answer slider'
				defaultValue={0}
				step={25}
				marks={marks}
			/>
		</Grid>
	);
};

export default Answers;
