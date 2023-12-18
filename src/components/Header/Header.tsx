import { Box, AppBar, IconButton, Button } from '@mui/material';
import DarkLogo from '../../assets/DarkLogo.png';
import { Menu } from '@mui/icons-material/';
import HeaderSearch from '../../forms/HeaderSearch';
import { useContext, useState } from 'react';
import { MediaQueryContext } from '../../contexts/MediaQueryContextProvider';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Header = () => {
	const { isSmallScreen } = useContext(MediaQueryContext);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const closeMenu = (): void => setIsMenuOpen(false);

	return (
		<AppBar
			position='sticky'
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: isSmallScreen ? 'space-between' : 'space-around',
				alignItems: 'center',
				height: '5rem',
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
					<img src={DarkLogo} alt='logo' style={{ height: isSmallScreen ? '3rem' : '4rem' }} />
				</Box>
				<Box>
					{/*Create button generator*/}
					<Button
						sx={{
							display: isSmallScreen ? 'none' : null,
							color: '#FFFF',
							textTransform: 'capitalize',
							fontFamily: 'inherit',
							fontSize: '1.15rem',
							marginLeft: '1rem',
						}}>
						Movies
					</Button>
					<Button
						sx={{
							display: isSmallScreen ? 'none' : null,
							color: '#FFFF',
							textTransform: 'capitalize',
							fontFamily: 'inherit',
							fontSize: '1.15rem',
							marginLeft: '1rem',
						}}>
						TV Shows
					</Button>
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
					}}>
					Sign In
				</Button>
			</Box>
		</AppBar>
	);
};

export default Header;
