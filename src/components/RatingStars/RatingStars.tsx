import { Box, Rating } from '@mui/material';
import { StarBorderOutlined } from '@mui/icons-material';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import { useContext } from 'react';

const RatingStars = ({ rating }: any) => {
	const { isVerySmallScreen, isSmallScreen } = useContext(MediaQueryContext);
	return (
		<Box>
			<Rating
				value={rating}
				precision={0.5}
				readOnly
				sx={{ my: isVerySmallScreen ? '0.2rem' : '0.5rem' }}
				emptyIcon={
					<StarBorderOutlined style={{ color: 'orange' }} fontSize={isSmallScreen ? 'inherit' : 'medium'} />
				}
				size={isSmallScreen ? 'small' : 'medium'}
			/>
		</Box>
	);
};

export default RatingStars;
