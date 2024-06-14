'use client'
import { ConsultationModal } from '@/features/ConsultationModal'

import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Link from 'next/link'
import { useState } from 'react'
import cls from './HeroSection.module.scss'

export const HeroSection = () => {
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)
	const handleModalClose = () => {
		setModalConsultOpen(false)
	}
	return (
		<Section id='#hero' className={cls.Hero}>
			<div className={cls.Touch}>
				<h1 className={cls.Heading}>
					Ваш партнер в мир доставки грузов из Китая
				</h1>
				<h2 className={cls.Subheading}>
					Мы осуществляем надёжные воздушные, морские и сухопутные
					грузоперевозки для вашего бизнеса.
				</h2>
				<div className={cls.ButtonContainer}>
					<PrimaryButton
						className={cls.PrimaryButton}
						text='Получить быстрый расчет'
						onClick={() => setModalConsultOpen(true)}
					/>
					<Link
						href='https://t.me/dragonfreight'
						target='_blank'
						className={cls.TelegramLink}
					>
						Актуальные ставки в телеграмме &nbsp;&nbsp; &rarr;
					</Link>
				</div>
			</div>
			<div className={cls.ImageContainer}>
				<img src='/img/hero/china-map.svg' alt='' />
			</div>
			<ConsultationModal
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
			/>
		</Section>
	)
}
