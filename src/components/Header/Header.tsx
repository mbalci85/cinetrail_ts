import { Box, AppBar, IconButton, Button } from '@mui/material';
import DarkLogo from '../../assets/DarkLogo.png';
import { Menu } from '@mui/icons-material/';
import HeaderSearch from '../../forms/HeaderSearch';
import { ReactElement, useContext, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const navigate = useNavigate();

	const closeMenu = (): void => setIsMenuOpen(false);

	const headerBtnGenerator = (btnText: string): ReactElement => (
		<Button
			sx={{
				display: isSmallScreen ? 'none' : null,
				color: '#FFFF',
				textTransform: 'capitalize',
				fontFamily: 'inherit',
				fontSize: '1.15rem',
				marginLeft: '1rem',
			}}>
			{btnText}
		</Button>
	);

	return (
		<AppBar
			position='sticky'
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: isSmallScreen ? 'space-between' : 'space-around',
				alignItems: 'center',
				height: isSmallScreen ? '3.25rem' : '5rem',
				backgroundColor: 'black',
				paddingRight: isSmallScreen ? '0.75rem' : null,
			}}>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Box sx={{ display: isSmallScreen ? 'flex' : 'none' }}>
					<IconButton onClick={() => setIsMenuOpen(true)}>
						<Menu sx={{ color: '#FFFF' }} />
					</IconButton>
				</Box>
				<HamburgerMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
				<Box>
					<img
						src={DarkLogo}
						alt='logo'
						style={{ height: isSmallScreen ? '3rem' : '4rem', cursor: 'pointer' }}
						onClick={() => navigate('/')}
					/>
				</Box>
				<Box>
					{headerBtnGenerator('Movies')}
					{headerBtnGenerator('TV Shows')}
				</Box>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<HeaderSearch />
				<Button
					variant='contained'
					sx={{
						display: isSmallScreen ? 'none' : null,
						backgroundColor: '#E10707',
						fontFamily: 'inherit',
						marginLeft: '0.5rem',
						':hover': {
							backgroundColor: 'white',
							color: '#E10707',
						},
					}}>
					Sign In
				</Button>
			</Box>
		</AppBar>
	);
};

export default Header;
