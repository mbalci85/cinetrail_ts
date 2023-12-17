import { Box, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from 'react';
import { MediaQueryContext } from '../contexts/MediaQueryContextProvider';

const HeaderSearch = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box>
			<TextField
				fullWidth
				size='small'
				sx={{
					backgroundColor: 'white',
					border: 'none',
					borderRadius: '0.5rem',
					height: '2.5rem',
					width: isSmallScreen ? '12rem' : '17rem',
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
		</Box>
	);
};

export default HeaderSearch;
