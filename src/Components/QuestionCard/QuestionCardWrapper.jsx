import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import styles from '../../stylesheets/questionCard.module.css';
import Categories from './Categories';
import Questions from './Questions';
import { questionBank } from '../../utils/constants';
import Answers from './Answers';

const QuestionCardWrapper = () => {
	const [currQuestion, setCurrQuestion] = React.useState(0);
	const [questions, setQuestions] = React.useState(questionBank);
	return (
		<Grid container xs={11} sm={8}>
			<Paper className={styles.container}>
				<Grid xs={12} container>
					<Categories currQuestion={currQuestion} />
				</Grid>
				<Grid xs={12} container>
					<Questions currQuestion={currQuestion} questionBank={questions} />
				</Grid>
				<Grid xs={12} container>
					<Answers
						currQuestion={currQuestion}
						questionBank={questions}
						setQuestions={setQuestions}
					/>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default QuestionCardWrapper;
