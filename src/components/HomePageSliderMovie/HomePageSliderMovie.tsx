import { Box, IconButton, Rating, Typography } from '@mui/material';
import { Movie } from '../../interfaces/Movie';
import { ArrowBackIos, ArrowForwardIos, StarBorderOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';

interface MovieProps {
	movie: Movie;
	currentMovieIndex: number;
	setCurrentMovieIndex: React.Dispatch<React.SetStateAction<number>>;
	numberOfUpcomingMovies: number;
}

const HomePageSliderMovie = ({
	movie,
	currentMovieIndex,
	setCurrentMovieIndex,
	numberOfUpcomingMovies,
}: MovieProps) => {
	const movieBackdropBaseUrl = import.meta.env.VITE_BACKDROP_MOVIES_URL;

	const navigate = useNavigate();
	const { isVerySmallScreen, isSmallScreen, isMediumScreen } = useContext(MediaQueryContext);

	return (
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				width: '100vw',
				aspectRatio: '16/9',
				maxHeight: '88vh',
				backgroundImage: `url(${movieBackdropBaseUrl}${movie.backdrop_path})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				color: 'white',
			}}>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0,0,0,0.5)',
				}}></Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100%',
					px: isSmallScreen ? '1rem' : '1.5rem',
				}}>
				<Box sx={{ display: 'flex' }}>
					<IconButton
						onClick={() => {
							if (currentMovieIndex - 1 >= 0) {
								setCurrentMovieIndex(currentMovieIndex - 1);
							} else {
								setCurrentMovieIndex(numberOfUpcomingMovies - 1);
							}
						}}
						sx={{ ':hover': { backgroundColor: 'transparent' } }}>
						<ArrowBackIos
							sx={{
								color: '#E10707',
								fontSize: isSmallScreen ? '1.75rem' : '2.5rem',
								':hover': { fontSize: isSmallScreen ? '2rem' : '2.75rem' },
							}}
						/>
					</IconButton>

					<Box sx={{ width: '35vw', zIndex: 1 }}>
						<Typography
							variant={isSmallScreen ? 'body1' : isMediumScreen ? 'h5' : 'h4'}
							sx={{ marginBottom: isVerySmallScreen ? '0.2rem' : '0.5rem' }}>
							{movie.title}
						</Typography>
						<Typography
							sx={{
								display: isSmallScreen ? 'none' : null,
								fontSize: isSmallScreen ? '0.65rem' : isMediumScreen ? '0.75rem' : '0.85rem',
							}}>
							{movie.overview}
						</Typography>
						<Typography
							variant={isSmallScreen ? 'caption' : isMediumScreen ? 'body2' : 'body1'}
							sx={{ marginTop: isVerySmallScreen ? '0.2rem' : '0.5rem' }}>
							Release Date: {movie.release_date}
						</Typography>
						<br />
						<Rating
							value={movie.vote_average / 2}
							precision={0.5}
							readOnly
							sx={{ my: isVerySmallScreen ? '0.2rem' : '0.5rem' }}
							emptyIcon={
								<StarBorderOutlined
									style={{ color: 'orange' }}
									fontSize={isSmallScreen ? 'inherit' : 'medium'}
								/>
							}
							size={isSmallScreen ? 'small' : 'medium'}
						/>
						<Typography
							variant='body2'
							sx={{ textTransform: 'capitalize', cursor: 'pointer' }}
							onClick={() => navigate('')}>
							See Details
						</Typography>
					</Box>
				</Box>
				<Box>
					<IconButton
						onClick={() => {
							if (currentMovieIndex + 1 < numberOfUpcomingMovies) {
								setCurrentMovieIndex(currentMovieIndex + 1);
							} else {
								setCurrentMovieIndex(0);
							}
						}}
						sx={{ ':hover': { backgroundColor: 'transparent' } }}>
						<ArrowForwardIos
							sx={{
								color: '#E10707',
								fontSize: isSmallScreen ? '1.75rem' : '2.5rem',
								':hover': { fontSize: isSmallScreen ? '2rem' : '2.75rem' },
							}}
						/>
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default HomePageSliderMovie;
