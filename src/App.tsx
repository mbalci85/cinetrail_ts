import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import MediaQueryContextProvider from './contexts/MediaQueryContextProvider';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';

function App() {
	return (
		<Box>
			<MediaQueryContextProvider>
				<Router>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</Router>
				<Footer />
			</MediaQueryContextProvider>
		</Box>
	);
}

export default App;
