'use client'
import { Alert, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useMemo, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import cls from './news.module.scss'

interface EditNewsI {
	item: any
	open: boolean
	handleClose: () => void
	updateData: () => void
}

const EditNews = ({ item, open, handleClose, updateData }: EditNewsI) => {
	const [title, setTitle] = useState('')
	const [thumbnail, setThumbnail] = useState('')
	const [text, setText] = useState('')
	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	useEffect(() => {
		const { title, thumbnail, text } = item

		setTitle(title)
		setThumbnail(thumbnail)
		setText(text)
	}, [item])

	const quillRef = useRef<ReactQuill>(null)

	const handleThumbnail = () => {
		const input = document.createElement('input')
		input.setAttribute('type', 'file')
		input.setAttribute('accept', 'image/*')
		input.classList.add('ll0l2')
		input.click()

		input.onchange = async () => {
			if (input.files !== null) {
				const file = input.files[0]
				if (/^image\//.test(file.type)) {
					const formData = new FormData()
					formData.append('image', file)
					const res = await axios.post('/api/news/upload', formData)
					const url = res?.data?.url
					setThumbnail(url)
				} else {
					console.log('You could only upload images.')
				}
			}
		}
	}

	const imageHandler = (e: any) => {
		const editor = quillRef.current?.getEditor()

		const input = document.createElement('input')
		input.setAttribute('type', 'file')
		input.setAttribute('accept', 'image/*')
		input.classList.add('lll2')
		input.click()

		input.onchange = async () => {
			if (input.files !== null) {
				const file = input.files[0]
				if (/^image\//.test(file.type)) {
					const formData = new FormData()
					formData.append('image', file)
					const res = await axios.post('/api/news/upload', formData)
					const url = res?.data?.url
					editor?.insertEmbed(editor.getSelection(), 'image', url)
				} else {
					console.log('You could only upload images.')
				}
			}
		}
	}

	const cancelAdding = () => {
		resetStatesData()
		handleClose()
		setAllDataCompleteAlert(true)
	}

	async function addNewPalette() {
		const data = {
			slug: item.slug,
			title: item.title,
			thumbnail,
			text,
			date: item.date,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/news/edit', formData, {
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
		setTitle('')
		setThumbnail('')
		setText('')
	}

	const toolbar = [
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline'],
		['link', 'image'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ indent: '-1' }, { indent: '+1' }],
		[{ color: [] }, { background: [] }],
		[{ font: [] }],
		[{ align: [] }],
	]

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'color',
	]

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [1, 2, 3, 4, 5, 6, false] }],
					['bold', 'italic', 'underline', 'strike'],
					[
						{ list: 'ordered' },
						{ list: 'bullet' },
						{ indent: '-1' },
						{ indent: '+1' },
					],
					['image', 'link'],
					[
						{
							color: [
								'#000000',
								'#e60000',
								'#ff9900',
								'#ffff00',
								'#008a00',
								'#0066cc',
								'#9933ff',
								'#ffffff',
								'#facccc',
								'#ffebcc',
								'#ffffcc',
								'#cce8cc',
								'#cce0f5',
								'#ebd6ff',
								'#bbbbbb',
								'#f06666',
								'#ffc266',
								'#ffff66',
								'#66b966',
								'#66a3e0',
								'#c285ff',
								'#888888',
								'#a10000',
								'#b26b00',
								'#b2b200',
								'#006100',
								'#0047b2',
								'#6b24b2',
								'#444444',
								'#5c0000',
								'#663d00',
								'#666600',
								'#003700',
								'#002966',
								'#3d1466',
							],
						},
					],
				],
				handlers: {
					image: imageHandler,
				},
			},
		}),
		[]
	)

	return (
		<div className={`${cls.Modal} ${open ? cls.ModalActive : ''}`}>
			<div className={cls.ModalContent}>
				<div className={cls.container}>
					<div className={cls.Title}>
						{' '}
						<Typography component='h1' variant='h1'>
							Добавить новость
						</Typography>
					</div>

					<TextField
						margin='normal'
						required
						label='Заголовок'
						disabled
						type='text'
						sx={{ width: '70%' }}
						value={title}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setTitle(event.target.value)
						}}
					/>
					<Button
						variant='outlined'
						size='large'
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: '#fff',
							color: '#222',
							width: '70%',
						}}
						onClick={handleThumbnail}
					>
						Загрузить обложку
					</Button>

					<div className={cls.editor}>
						<ReactQuill
							ref={quillRef}
							theme='snow'
							modules={modules}
							formats={formats}
							value={text}
							onChange={setText}
							placeholder='Что нового?'
							className={cls.textArea}
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

export default EditNews
