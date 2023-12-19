import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import MediaQueryContextProvider from './contexts/MediaQueryContextProvider';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<Box>
			<MediaQueryContextProvider>
				<Router>
					<Header />
					<Routes></Routes>
				</Router>
				<Footer />
			</MediaQueryContextProvider>
		</Box>
	);
}

export default App;
