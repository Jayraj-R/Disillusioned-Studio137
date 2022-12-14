import * as React from 'react';
import styles from '../../stylesheets/questionCard.module.css';
import { Grid } from '@mui/material';

const Questions = ({ currQuestion, questionBank }) => {
	return (
		<Grid
			container
			item
			xs={12}
			px={8}
			py={6}
			spacing={2}
			className={styles.question__container}
		>
			<Grid
				container
				item
				direction='column'
				justifyContent='space-between'
				alignItems='center'
				xs={12}
				className={styles.question__section}
			>
				<Grid variant='div' className={styles.question__progress}>
					<span style={{ fontWeight: 700 }}>{currQuestion.id}</span>/
					{questionBank.length}
				</Grid>
				<Grid variant='p' className={styles.question__label}>
					{currQuestion.label}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Questions;
