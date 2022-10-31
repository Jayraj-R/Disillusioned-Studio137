import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import styles from '../../stylesheets/questionCard.module.css';
import Categories from './Categories';

const QuestionCardWrapper = () => {
	return (
		<Grid xs={11} sm={8}>
			<Paper className={styles.container}>
				<Grid xs={12}>
					<Categories />
				</Grid>
			</Paper>
		</Grid>
	);
};

export default QuestionCardWrapper;
