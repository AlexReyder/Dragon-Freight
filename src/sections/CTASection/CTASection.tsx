//@ts-nocheck
'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/ui/PrimaryButton'
import { ModalInput } from '@/shared/ui/Inputs/ModalInput/ModalInput'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import cls from './CTASection.module.scss'
interface CustomProjectProps {
	theme?: string
	className?: string
	subtitle: strimg
	title: any
	text: string
}

export const CTASection = ({
	theme = 'Консультация',
	className,
	subtitle,
	title,
	text,
}: CustomProjectProps) => {
	const { control, register, handleSubmit } = useForm({
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
					// router.push('/spasibo')
				})
				.catch(e => console.log(e))
		} else {
			setIsPhoneInvalid(true)
		}
	}

	const handlePolicyChange = () => {
		setIsPolicy(!isPolicy)
	}

	return (
		<Section className={cls.CTA}>
			<Container className={cls.Container}>
				<div className={cls.Wrapper}>
					<Headings
						title={title}
						subtitle={subtitle}
						text={text}
						color='b'
						className={cls.Heading}
					/>
					<div className={cls.FormWrapper}>
						<form onSubmit={handleSubmit(onSubmit)} className={cls.Form}>
							<Controller
								name='username'
								control={control}
								render={({ field }) => (
									<ModalInput
										placeholder='Ваше имя'
										required
										{...field}
										className={cls.ModalInput}
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

							<PrimaryButton
								text='Отправить заявку'
								theme='White'
								className={cls.Submit}
								type='submit'
							/>
						</form>
					</div>
				</div>
				<div className={cls.ImageContainer}>
					<img
						src='/img/cta/cta.svg'
						alt='Получить быстрый расчет'
						className={cls.Image}
					/>
				</div>
			</Container>
		</Section>
	)
}
