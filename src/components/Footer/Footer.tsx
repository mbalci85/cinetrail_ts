import { Box, Button } from '@mui/material';

const Footer = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: '5rem',
				backgroundColor: 'black',
				color: 'white',
			}}>
			<Box>2024 @ CineTrail</Box>
			<Box>
				<Button
					sx={{
						color: 'white',
						fontFamily: 'inherit',
						border: '0.01rem solid white',
						padding: '0.2rem',
						width: '5rem',
					}}>
					About
				</Button>
			</Box>
			<Box>All rights reserved</Box>
		</Box>
	);
};

export default Footer;
