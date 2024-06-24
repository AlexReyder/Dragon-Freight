'use client'
import { Alert, Button, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import cls from './product.module.scss'

interface AddNewsI {
	open: boolean
	handleClose: () => void
	folderName: string
	type: string
	updateData: () => void
}

const AddNews = ({
	open,
	handleClose,
	folderName,
	type,
	updateData,
}: AddNewsI) => {
	const objectId = folderName
	const [openBar, setOpenBar] = useState(false)
	const [file, setFile] = useState(null)
	const [media, setMedia] = useState('')
	const [value, setValue] = useState('')
	const [title, setTitle] = useState('')
	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	const cancelAdding = () => {
		// if (objectImages.length === 0 && paletteImages.length === 0) {
		// 	resetStatesData()
		// 	handleClose()
		// 	setAllDataCompleteAlert(true)
		// 	return
		// }

		let formData = new FormData()
		formData.append('path', `upload/products/${type}/${folderName}`)
		axios
			.post('/api/admin/cancelAddingNewProduct', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(() => {
				resetStatesData()
				handleClose()
			})
	}
	async function addNewPalette() {
		var slug = require('slug')

		const data = {
			title,
			desc: value,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/news/add', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				updateData()
				resetStatesData()
				handleClose()
				setAllDataCompleteAlert(true)
			})
			.catch(e => {
				console.log(e)
			})
	}
	const resetStatesData = () => {
		activateClearOutputData(!clearOutputData)
		// setObjectName('')
		// setObjectImages([])
		// setPaletteImages([])
		// setMiniatureImages([])
	}

	const toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'], // toggled buttons
		['blockquote', 'code-block'],
		['link', 'image', 'video', 'formula'],

		[{ header: 1 }, { header: 2 }], // custom button values
		[{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
		[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
		[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
		[{ direction: 'rtl' }], // text direction

		[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		[{ color: [] }, { background: [] }], // dropdown with defaults from theme
		[{ font: [] }],
		[{ align: [] }],

		['clean'], // remove formatting button
	]

	return (
		<div className={`${cls.Modal} ${open ? cls.ModalActive : ''}`}>
			<div className={cls.ModalContent}>
				<Typography
					variant='h2'
					sx={{
						fontWeight: 500,
						textAlign: 'center',
						mt: '20px',
						mb: '20px',
					}}
				>
					Добавить новую ставку
				</Typography>
				<div className={cls.container}>
					<input
						type='text'
						placeholder='Заголовок'
						className={cls.input}
						onChange={e => setTitle(e.target.value)}
					/>

					<div className={cls.editor}>
						<button className={cls.button} onClick={() => setOpenBar(!openBar)}>
							<Image src='/img/editor/plus.png' alt='' width={16} height={16} />
						</button>
						{openBar && (
							<div className={cls.add}>
								<input
									type='file'
									id='image'
									onChange={e => setFile(e.target.files[0])}
									style={{ display: 'none' }}
								/>
								<button className={cls.addButton}>
									<label htmlFor='image'>
										<Image
											src='/img/editor/image.png'
											alt=''
											width={16}
											height={16}
										/>
									</label>
								</button>
								<button className={cls.addButton}>
									<Image
										src='/img/editor/external.png'
										alt=''
										width={16}
										height={16}
									/>
								</button>
								<button className={cls.addButton}>
									<Image
										src='/img/editor/video.png'
										alt=''
										width={16}
										height={16}
									/>
								</button>
							</div>
						)}
						<ReactQuill
							className={cls.textArea}
							theme='bubble'
							value={value}
							onChange={setValue}
							placeholder='Что нового?'
							modules={{
								toolbar: toolbarOptions,
							}}
						/>
					</div>
				</div>

				<div className={cls.PaletteWrapper}>
					<Button
						variant='contained'
						size='large'
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: 'var(--color-primary)',
						}}
						onClick={cancelAdding}
					>
						Отмена
					</Button>
					<Button
						variant='contained'
						size='large'
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: 'var(--color-primary)',
						}}
						onClick={addNewPalette}
					>
						Добавить
					</Button>
				</div>
			</div>
			{!isAllDataCompleteAlert ? (
				<Alert
					variant='filled'
					severity='error'
					className={cls.Alert}
					onClick={() => setAllDataCompleteAlert(true)}
				>
					Не все поля заполнены!
				</Alert>
			) : null}
		</div>
	)
}

export default AddNews
