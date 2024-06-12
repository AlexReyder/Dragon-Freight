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
	className?: string
	subtitle: strimg
	title: string
	text: string
	bg: string
}

export const CTASection = ({
	className,
	subtitle,
	title,
	text,
	bg,
}: CustomProjectProps) => {
	const { control, register, handleSubmit } = useForm({
		defaultValues: {
			username: '',
			phone: '',
		},
	})

	const [isPolicy, setIsPolicy] = useState(true)
	const [isPolicyErr, setIsPolicyErr] = useState(false)

	const router = useRouter()

	const onSubmit = (data: any) => {
		if (isPolicy) {
			axios
				.post(`${process.env.domainUrl}/api/mail/cta`, data, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(res => {
					setIsPolicyErr(false)
					router.push('/spasibo')
				})
				// .then(response => router.push('/spasibo'))
				.catch(e => console.log(e))
		} else {
			setIsPolicyErr(true)
		}
	}

	const handlePolicyChange = () => {
		setIsPolicy(!isPolicy)
	}

	return (
		<Section className={cls.CTA}>
			<Container className={cls.Container}>
				<div className={cls.Wrapper}>
					<div className={cls.Left}>
						<Headings
							title={title}
							subtitle={subtitle}
							text={text}
							className={cls.Heading}
						/>
					</div>
					<div
						className={cls.Right}
						style={{
							backgroundImage: `
                            linear-gradient(to right, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.25) 100%),
                            url(${bg})`,
						}}
					>
						<form onSubmit={handleSubmit(onSubmit)} className={cls.Right}>
							<Controller
								name='username'
								control={control}
								render={({ field }) => (
									<ModalInput placeholder='Ваше имя' required {...field} />
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

							<PrimaryButton
								text='Отправить заявку'
								theme='White'
								className={cls.Submit}
								type='submit'
							/>
						</form>
					</div>
				</div>
			</Container>
		</Section>
	)
}