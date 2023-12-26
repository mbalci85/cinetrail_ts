import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { MediaQueryContext } from '../contexts/MediaQueryContextProvider';

const HeaderSearch = () => {
	const { isSmallScreen, isVerySmallScreen } = useContext(MediaQueryContext);
	return (
		<Box>
			{!isSmallScreen ? (
				<TextField
					fullWidth
					size='small'
					sx={{
						backgroundColor: 'white',
						border: 'none',
						borderRadius: '0.5rem',
						height: '2.5rem',
						width: isSmallScreen ? '12rem' : '17rem',
						margin: 0,
					}}
					placeholder='Search...'
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
			) : (
				<input
					type='text'
					placeholder='Search...'
					style={{
						padding: '0.3rem 0.4rem',
						fontSize: '0.8rem',
						borderRadius: '0.3rem',
						border: 'none',
						width: isVerySmallScreen ? '10rem' : '15rem',
					}}
				/>
			)}
		</Box>
	);
};

export default HeaderSearch;
