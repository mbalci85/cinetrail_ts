import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import MediaQueryContextProvider from './contexts/MediaQueryContextProvider';

function App() {
	return (
		<Box>
			<MediaQueryContextProvider>
				<Router>
					<Header />
					<Routes></Routes>
				</Router>
			</MediaQueryContextProvider>
		</Box>
	);
}

export default App;
