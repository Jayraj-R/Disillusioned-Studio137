import * as React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import styles from '../../stylesheets/questionCard.module.css';
import Categories from './Categories';
import Questions from './Questions';
import { questionBank } from '../../utils/constants';
import Answers from './Answers';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
				<Grid xs={12} px={8} py={6} className={styles.step__container}>
					<Button
						variant='text'
						disabled={currQuestion === 0}
						onClick={() => setCurrQuestion(currQuestion - 1)}
						startIcon={<ArrowBackIcon />}
						style={{
							color: '#000',
							fontWeight: '700',
						}}
					>
						Previous
					</Button>
					<Button
						variant='text'
						disabled={currQuestion === questions.length - 1}
						onClick={() => setCurrQuestion(currQuestion + 1)}
						endIcon={<ArrowForwardIcon />}
						style={{
							color: '#000',
							fontWeight: '700',
						}}
					>
						Next
					</Button>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default QuestionCardWrapper;
