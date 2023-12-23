import { Instagram, Telegram, WhatsApp } from '@mui/icons-material'

const Footer = () => {
	return (
		<div className='footer'>
			<p>© 2023-2025 Абхазская Федерация киберспорта</p>

			<div>
				<div >
					<a
						href='https://www.instagram.com/hajime_4_life/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Instagram />
					</a>
					<a
						href='https://www.instagram.com/hajime_4_life/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Telegram />
					</a>
					<a
						href='https://www.instagram.com/hajime_4_life/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<WhatsApp />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Footer
