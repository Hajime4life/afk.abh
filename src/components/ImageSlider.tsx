import React from 'react'
import { Button, MobileStepper } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

//@ts-ignore
const ImageSlider = ({ images }) => {
	const [activeStep, setActiveStep] = React.useState(0)

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}

	return (
		<div style={{ textAlign: 'center', position: 'relative' }}>
			<div style={{ display: 'inline-block', position: 'relative' }}>
				<img
					src={images[activeStep]}
					alt={`Image ${activeStep + 1}`}
					style={{ maxWidth: '100%', maxHeight: '300px' }}
				/>
				{images.length > 1 && (
					<>
						<Button
							size='large'
							onClick={handleBack}
							disabled={activeStep === 0}
							style={{
								position: 'absolute',
								top: '50%',
								left: 0,
								transform: 'translateY(-50%)',
								color: 'white', // Сделать стрелку белой
							}}
						>
							<KeyboardArrowLeft fontSize='large' />
						</Button>
						<Button
							size='large'
							onClick={handleNext}
							disabled={activeStep === images.length - 1}
							style={{
								position: 'absolute',
								top: '50%',
								right: 0,
								transform: 'translateY(-50%)',
								color: 'white', // Сделать стрелку белой
							}}
						>
							<KeyboardArrowRight fontSize='large' />
						</Button>
						<MobileStepper
							variant='dots'
							steps={images.length}
							position='static'
							activeStep={activeStep}
							backButton={null}
							nextButton={null}
							style={{
								position: 'absolute',
								bottom: '10px',
								left: '50%',
								transform: 'translateX(-50%)',
								background: 'rgba(255, 255, 255)',
								padding: '5px',
								borderRadius: '10px',
							}}
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default ImageSlider
