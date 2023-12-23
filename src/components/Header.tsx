import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';
import { useSideBar } from '../context/ContextProvider';



const Header = () => {
	const { toggleSideBar } = useSideBar()
	return (
		<AppBar position='static' className='header'>
			<Toolbar variant='dense'>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2 }}
					onClick={toggleSideBar}
				>
					<MenuIcon />
				</IconButton>
				<img
					src={logo}
					alt='logo'
					style={{ height: '40px', margin: '5px', marginTop: '10px', marginBottom: '10px' }}
				/>
				<Typography> Абхазская Федерация Киберспорта </Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header;
