import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

const Footer = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: isSmallScreen ? '3.5rem' : '5rem',
				backgroundColor: 'black',
				color: 'white',
			}}>
			<Box>
				<Typography variant='inherit' sx={{ fontSize: isSmallScreen ? '0.8rem' : '1rem' }}>
					2024 @ CineTrail
				</Typography>
			</Box>
			<Box>
				<Button
					sx={{
						color: 'white',
						fontFamily: 'inherit',
						border: '0.01rem solid white',
						padding: '0.2rem',
						width: '5rem',
					}}
					size='small'>
					About
				</Button>
			</Box>
			<Box>
				<Typography variant='inherit' sx={{ fontSize: isSmallScreen ? '0.8rem' : '1rem' }}>
					All rights reserved
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
