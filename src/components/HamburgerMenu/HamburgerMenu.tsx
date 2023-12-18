import { Box, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';

type HamburgerMenuTypes = {
	isMenuOpen: boolean;
	closeMenu: () => void;
};

const HamburgerMenu = ({ isMenuOpen, closeMenu }: HamburgerMenuTypes) => {
	return (
		<Box>
			<Drawer open={isMenuOpen} onClose={closeMenu}>
				<List>
					<ListItem>
						<ListItemButton>
							<ListItemText primary='Movies' />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemText primary='TV Shows' />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemText primary='Sign In' />
						</ListItemButton>
					</ListItem>
				</List>
			</Drawer>
		</Box>
	);
};

export default HamburgerMenu;
