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
	const { isSmallScreen } = useContext(MediaQueryContext);

	console.log(movie.vote_average / 2);
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
					px: isSmallScreen ? '1rem' : '2rem',
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
						sx={{ ':hover': { fontSize: '3rem', backgroundColor: 'transparent' } }}>
						<ArrowBackIos
							sx={{
								color: '#E10707',
								fontSize: isSmallScreen ? '1.75rem' : '2.5rem',
								':hover': { fontSize: isSmallScreen ? '2rem' : '2.75rem' },
							}}
						/>
					</IconButton>

					<Box sx={{ width: '35vw', zIndex: 1 }}>
						<Typography variant={isSmallScreen ? 'body1' : 'h4'}>{movie.title}</Typography>
						<Typography variant='body2' sx={{ display: isSmallScreen ? 'none' : null, my: '0.5rem' }}>
							{movie.overview}
						</Typography>
						<Typography variant={isSmallScreen ? 'body2' : 'body1'}>
							Release Date: {movie.release_date}
						</Typography>

						<Rating
							value={movie.vote_average / 2}
							precision={0.5}
							readOnly
							sx={{ my: '0.5rem' }}
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
							sx={{ textTransform: 'capitalize', cursor: 'pointer', width: 'auto' }}
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
						sx={{ ':hover': { fontSize: '3rem', backgroundColor: 'transparent' } }}>
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
