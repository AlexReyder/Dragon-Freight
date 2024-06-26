'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/ui/PrimaryButton'
import { ModalInput } from '@/shared/ui/Inputs/ModalInput/ModalInput'
import { Modal } from '@/shared/ui/Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import cls from './ConsultationModal.module.scss'

interface ConsultationModalProps {
	theme?: string
	isOpen: boolean
	handleClose: () => void
}

export const ConsultationModal = ({
	theme = 'Консультация',
	isOpen,
	handleClose,
}: ConsultationModalProps) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: '',
			phone: '',
		},
	})

	const [isPhoneInvalid, setIsPhoneInvalid] = useState(false)
	const router = useRouter()
	const onSubmit = (data: any) => {
		let formData = new FormData()
		formData.append('username', data.username)
		formData.append('phone', data.phone)
		formData.append('theme', theme)
		if (data.phone.length >= 11) {
			axios
				.post(`${process.env.domainUrl}/api/mail/modal`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(res => {
					setIsPhoneInvalid(false)
					router.push('/spasibo')
				})
		} else {
			setIsPhoneInvalid(true)
		}
	}

	return (
		<Modal type='Consult' isOpen={isOpen} onClose={handleClose}>
			<div className={cls.Wrapper}>
				<div className={cls.Left}>
					<ConsultaionHeading />
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={cls.Right}>
					<Controller
						name='username'
						control={control}
						render={({ field }) => (
							<ModalInput
								placeholder='Ваше имя'
								className={cls.NameInput}
								required
								{...field}
							/>
						)}
					/>
					<Controller
						name='phone'
						control={control}
						render={({ field }) => (
							<PhoneInput
								containerClass={cls.PhoneContainer}
								inputClass={cls.ModalInput}
								country={'ru'}
								inputProps={{
									required: true,
								}}
								onlyCountries={['ru']}
								autoFormat={true}
								placeholder='Номер телефона'
								specialLabel=''
								{...field}
							/>
						)}
					/>
					{isPhoneInvalid ? (
						<p className={cls.InvalidPhone}>
							Номер телефона указан некорректно.
						</p>
					) : null}
					<PrimaryButton type='submit' text='Отправить заявку' />
				</form>
			</div>
		</Modal>
	)
}

export const ConsultaionHeading = () => {
	return (
		<>
			<h3 className={cls.Modal_heading}>Быстрый рассчет стоимости</h3>
			<p className={cls.Modal_subheading}>
				Оставьте номер телефона. Наш менеджер перезвонит и подробно ответит на
				Ваши вопросы.
			</p>
		</>
	)
}
