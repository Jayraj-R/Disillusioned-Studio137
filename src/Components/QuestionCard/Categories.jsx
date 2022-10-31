import * as React from 'react';
import { Grid } from '@mui/material';
import styles from '../../stylesheets/questionCard.module.css';
import ProgressBar from '../helper/ProgressBar';

const Categories = () => {
	return (
		<Grid
			container
			xs={12}
			px={8}
			py={6}
			spacing={2}
			className={styles.categories__container}
		>
			<Grid item xs={3} className={styles.categories__section}>
				<ProgressBar variant='determinate' value={50} />
				Idealistic
			</Grid>
			<Grid item xs={3} className={styles.categories__section}>
				<ProgressBar variant='determinate' value={50} />
				Disillusioned
			</Grid>
			<Grid item xs={3} className={styles.categories__section}>
				<ProgressBar variant='determinate' value={50} />
				Cynical
			</Grid>
			<Grid item xs={3} className={styles.categories__section}>
				<ProgressBar variant='determinate' value={50} />
				Hopeful
			</Grid>
		</Grid>
	);
};

export default Categories;
