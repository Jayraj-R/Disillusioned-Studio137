import { Grid } from '@mui/material';
import * as React from 'react';
import Navbar from './Navbar';
import QuestionCardWrapper from './QuestionCard/QuestionCardWrapper';

const Layout = () => {
	return (
		<Grid container xs={12} className='container'>
			{/* begin : Navbar */}
			<Grid item xs={12} className='section'>
				<Navbar />
			</Grid>
			{/* end : Navbar */}

			{/* begin : Question Card */}
			<Grid item xs={12} className='section' my={10}>
				<QuestionCardWrapper />
			</Grid>
			{/* end : Question Card */}
		</Grid>
	);
};

export default Layout;
