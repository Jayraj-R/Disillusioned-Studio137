import * as React from 'react';
import styles from '../../stylesheets/questionCard.module.css';
import { Grid, Typography } from '@mui/material';

const Questions = ({ currQuestion, questionBank }) => {
	return (
		<Grid
			container
			xs={12}
			px={8}
			py={6}
			spacing={2}
			className={styles.question__container}
		>
			<Grid item xs={12} className={styles.question__section}>
				<Typography variant='div' className={styles.question__progress}>
					<span style={{ fontWeight: 700 }}>{currQuestion + 1}</span>/
					{questionBank.length}
				</Typography>
				<Typography variant='p' className={styles.question__label}>
					{questionBank[currQuestion].label}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Questions;
