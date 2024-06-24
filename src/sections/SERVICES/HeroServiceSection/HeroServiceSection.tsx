'use client'
import { ConsultationModal } from '@/features/ConsultationModal'

import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Link from 'next/link'
import { useState } from 'react'
import cls from './HeroServiceSection.module.scss'

interface HeroServiceSectionP {
	img: string
	title: string
	subtitle?: string
}

export const HeroServiceSection = ({
	img,
	title,
	subtitle = '	Специализируемся на импорте товаров из любой точки Китая. Доставляем автомобильным, железнодорожным, морским и авиатранспортом.',
}: HeroServiceSectionP) => {
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)
	const handleModalClose = () => {
		setModalConsultOpen(false)
	}
	return (
		<Section id='hero-service' className={cls.Hero}>
			<div className={cls.Touch}>
				<h1 className={cls.Heading}>{title}</h1>
				<h2 className={cls.Subheading}>{subtitle}</h2>
				<div className={cls.ButtonContainer}>
					<PrimaryButton
						className={cls.PrimaryButton}
						text='Бесплатная консультация'
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
				<img src={img} alt='' />
			</div>
			<ConsultationModal
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
			/>
		</Section>
	)
}
