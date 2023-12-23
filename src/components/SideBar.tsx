import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import NewsIcon from '@mui/icons-material/Announcement'
import HouseIcon from '@mui/icons-material/Home'
import HandsIcon from '@mui/icons-material/Handshake'
import GavelIcon from '@mui/icons-material/Gavel'
import { useNavigate } from 'react-router-dom'
import { useSideBar } from '../context/ContextProvider'
import { FC } from 'react'

const SideBar: FC<any> = () => {
	const { isSideBarOpen } = useSideBar()
	const navigate = useNavigate()

	if (!isSideBarOpen) {
		return null
	}

	return (
		<List className='nav-list' aria-label='contacts'>
			<ListItem onClick={() => navigate('/')} className='nav-list__item'>
				<ListItemIcon>
					<HouseIcon />
				</ListItemIcon>
				<ListItemText primary='Главная' />
			</ListItem>
			<ListItem onClick={() => navigate('/news')} className='nav-list__item'>
				<ListItemIcon>
					<NewsIcon />
				</ListItemIcon>
				<ListItemText primary='Новости' />
			</ListItem>
			<ListItem onClick={() => navigate('/partners')} className='nav-list__item'>
				<ListItemIcon>
					<HandsIcon />
				</ListItemIcon>
				<ListItemText primary='Партнеры' />
			</ListItem>
			<ListItem onClick={() => navigate('/rules')} className='nav-list__item'>
				<ListItemIcon>
					<GavelIcon />
				</ListItemIcon>
				<ListItemText primary='Устав' />
			</ListItem>
		</List>
	)
}

export default SideBar
