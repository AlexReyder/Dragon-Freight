'use client'
import {
	Alert,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import cls from './bets.module.scss'

const AdminBets = () => {
	const [currentService, setCurrentService] = useState<string>('zhd')
	const [serviceName, setServiceName] = useState<string>('ЖД (EXW-FOR)')
	const [betText, setBetText] = useState<string>('')

	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)
	const [isSendSuccess, setIsSendSuccess] = useState(false)

	function handleChangeBetName(e: React.ChangeEvent<HTMLInputElement>) {
		setBetText(e.target.value)
	}

	function handleChangeCurrentTab(event: React.ChangeEvent<HTMLInputElement>) {
		setCurrentService((event.target as HTMLInputElement).value)
		setServiceName(event.target.name)
	}

	function resetStatesData() {
		activateClearOutputData(!clearOutputData)
		setCurrentService('zhd')
		setServiceName('ЖД (EXW-FOR)')
		setBetText('')
	}

	async function addNewBet() {
		if (betText === '') {
			setAllDataCompleteAlert(false)
			return
		}

		const data = {
			name: serviceName,
			type: currentService,
			text: betText,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/bets/add', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				resetStatesData()
				setAllDataCompleteAlert(true)
				setIsSendSuccess(true)
			})
			.catch(e => {
				console.log(e)
			})
	}

	return (
		<div className={cls.Window}>
			<div>
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
				<FormControl>
					<FormLabel id='demo-controlled-radio-buttons-group'>
						Тип услуги
					</FormLabel>
					<RadioGroup
						aria-labelledby='demo-controlled-radio-buttons-group'
						name='controlled-radio-buttons-group'
						value={currentService}
						onChange={handleChangeCurrentTab}
						row
					>
						<FormControlLabel
							value='zhd'
							control={<Radio />}
							label='ЖД (EXW-FOR)'
							name='ЖД (EXW-FOR)'
						/>
						<FormControlLabel
							value='avto'
							control={<Radio />}
							label='Авто (EXW-DAP)'
							name='Авто (EXW-DAP)'
						/>
						<FormControlLabel
							value='ocean'
							control={<Radio />}
							label='Море + Ж/Д FOB-FOR'
							name='Море + Ж/Д FOB-FOR'
						/>
						<FormControlLabel
							value='air'
							control={<Radio />}
							label='Авиа'
							name='Авиа'
						/>
					</RadioGroup>
				</FormControl>
				<div className='product-name'>
					<TextField
						margin='normal'
						required
						label='Текст'
						type='text'
						multiline
						minRows={10}
						sx={{ width: '100%' }}
						value={betText}
						onChange={handleChangeBetName}
					/>
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
						onClick={addNewBet}
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

			{isSendSuccess ? (
				<Alert
					variant='filled'
					severity='success'
					className={cls.Alert}
					onClick={() => setIsSendSuccess(false)}
				>
					Ставка добавлена.
				</Alert>
			) : null}
		</div>
	)
}

export default AdminBets
