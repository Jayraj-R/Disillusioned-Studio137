import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import styles from '../../stylesheets/questionCard.module.css';
import Categories from './Categories';
import Questions from './Questions';
import { questionBank } from '../../utils/constants';

const QuestionCardWrapper = () => {
	const [currQuestion, setCurrQuestion] = React.useState(0);

	return (
		<Grid xs={11} sm={8}>
			<Paper className={styles.container}>
				<Grid xs={12}>
					<Categories />
				</Grid>
				<Grid xs={12}>
					<Questions currQuestion={currQuestion} questionBank={questionBank} />
				</Grid>
			</Paper>
		</Grid>
	);
};

export default QuestionCardWrapper;
