import { Grid } from '@mui/material';
import * as React from 'react';
import Navbar from './Navbar';

const Layout = () => {
	return (
		<Grid container xs={12} className='container'>
			<Grid item xs={12} className='section'>
				<Navbar />
			</Grid>
		</Grid>
	);
};

export default Layout;
