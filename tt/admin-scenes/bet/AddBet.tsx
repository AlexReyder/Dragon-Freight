'use client'
// import { Alert, Button, TextField, Typography } from '@mui/material'
// import axios from 'axios'
// import React, { useState } from 'react'

interface AddBetI {
	open: boolean
	handleClose: () => void
	folderName: string
	type: string
	updateData: () => void
}

const AddBet = ({
	open,
	handleClose,
	folderName,
	type,
	updateData,
}: AddBetI) => {
	// const objectId = folderName
	// const [objectName, setObjectName] = useState('')

	// const [clearOutputData, activateClearOutputData] = useState(false)
	// const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	// const handleChangeObjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setObjectName(e.target.value)
	// }

	// const cancelAdding = () => {
	// 	// if (objectImages.length === 0 && paletteImages.length === 0) {
	// 	// 	resetStatesData()
	// 	// 	handleClose()
	// 	// 	setAllDataCompleteAlert(true)
	// 	// 	return
	// 	// }

	// 	let formData = new FormData()
	// 	formData.append('path', `upload/products/${type}/${folderName}`)
	// 	axios
	// 		.post('/api/admin/cancelAddingNewProduct', formData, {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		})
	// 		.then(() => {
	// 			resetStatesData()
	// 			handleClose()
	// 		})
	// }
	// async function addNewPalette() {
	// 	if (objectName === '') {
	// 		setAllDataCompleteAlert(false)
	// 		return
	// 	}

	// 	const data = {
	// 		id: objectId,
	// 		type: type,
	// 		name: objectName,
	// 	}

	// 	let formData = new FormData()
	// 	formData.append('data', JSON.stringify(data))

	// 	await axios
	// 		.post('/api/bets/add', formData, {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		})
	// 		.then(res => {
	// 			updateData()
	// 			resetStatesData()
	// 			handleClose()
	// 			setAllDataCompleteAlert(true)
	// 		})
	// 		.catch(e => {
	// 			console.log(e)
	// 		})
	// }
	// const resetStatesData = () => {
	// 	activateClearOutputData(!clearOutputData)
	// 	setObjectName('')
	// 	// setObjectImages([])
	// 	// setPaletteImages([])
	// 	// setMiniatureImages([])
	// }

	return (
		<h2>123123</h2>
		// <div className={`${cls.Modal} ${open ? cls.ModalActive : ''}`}>
		// 	<div className={cls.ModalContent}>
		// 		<Typography
		// 			variant='h2'
		// 			sx={{
		// 				fontWeight: 500,
		// 				textAlign: 'center',
		// 				mt: '20px',
		// 				mb: '20px',
		// 			}}
		// 		>
		// 			Добавить новую ставку
		// 		</Typography>
		// 		<div className='product-name'>
		// 			<TextField
		// 				margin='normal'
		// 				required
		// 				label='Текст'
		// 				type='text'
		// 				multiline
		// 				minRows={10}
		// 				sx={{ width: '100%' }}
		// 				value={objectName}
		// 				onChange={handleChangeObjectName}
		// 			/>
		// 		</div>

		// 		{/* <div className={cls.ModalMain}>
		// 			<div className={`${cls.ModalBox} ${cls.ModalBox1}`}>
		// 				<UploadImageObject
		// 					defaultStatus={'upload'}
		// 					folderName={objectId}
		// 					type={type}
		// 					returnData={handleMutateObjectImages}
		// 					clearOutputData={clearOutputData}
		// 				/>
		// 			</div>
		// 			<div className={`${cls.ModalBox} ${cls.ModalBox2}`}>
		// 				<UploadImagePalette
		// 					defaultStatus={'upload'}
		// 					folderName={objectId}
		// 					type={type}
		// 					returnData={handleMutatePaletteImages}
		// 					clearOutputData={clearOutputData}
		// 				/>
		// 			</div>
		// 		</div> */}

		// 		<div className={cls.PaletteWrapper}>
		// 			<Button
		// 				variant='contained'
		// 				size='large'
		// 				sx={{
		// 					mt: 3,
		// 					mb: 2,
		// 					mr: 2,
		// 					backgroundColor: 'var(--color-primary)',
		// 				}}
		// 				onClick={cancelAdding}
		// 			>
		// 				Отмена
		// 			</Button>
		// 			<Button
		// 				variant='contained'
		// 				size='large'
		// 				sx={{
		// 					mt: 3,
		// 					mb: 2,
		// 					mr: 2,
		// 					backgroundColor: 'var(--color-primary)',
		// 				}}
		// 				onClick={addNewPalette}
		// 			>
		// 				Добавить
		// 			</Button>
		// 		</div>
		// 	</div>
		// 	{!isAllDataCompleteAlert ? (
		// 		<Alert
		// 			variant='filled'
		// 			severity='error'
		// 			className={cls.Alert}
		// 			onClick={() => setAllDataCompleteAlert(true)}
		// 		>
		// 			Не все поля заполнены!
		// 		</Alert>
		// 	) : null}
		// </div>
	)
}

export default AddBet
