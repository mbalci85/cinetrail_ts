import { Box } from '@mui/material';
import axios from 'axios';
import { useQuery } from 'react-query';

import HomePageSliderMovie from '../HomePageSliderMovie/HomePageSliderMovie';
import { useState } from 'react';

const HomePageSlider = () => {
	const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
	const [numberOfUpcomingMovies, setNumberOfUpcomingMovies] = useState<number>(1);

	const API_KEY = import.meta.env.VITE_API_KEY;
	const upcomingMoviesURL = import.meta.env.VITE_UPCOMING_MOVIES_URL;

	const { data, isLoading, isError } = useQuery('upcomingMovies', async () => {
		const response = await axios.get(`${upcomingMoviesURL}?api_key=${API_KEY}`);
		setNumberOfUpcomingMovies(response.data.results.length);
		return response.data.results;
	});

	if (isLoading) {
		return <Box>....Loading</Box>;
	}

	if (isError) {
		return <Box>Error fetching data</Box>;
	}

	return (
		<Box>
			<HomePageSliderMovie
				movie={data[currentMovieIndex]}
				setCurrentMovieIndex={setCurrentMovieIndex}
				currentMovieIndex={currentMovieIndex}
				numberOfUpcomingMovies={numberOfUpcomingMovies}
			/>
		</Box>
	);
};

export default HomePageSlider;
