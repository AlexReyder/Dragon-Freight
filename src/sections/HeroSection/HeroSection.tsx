'use client'
import { ConsultationModal } from '@/features/ConsultationModal'

import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton'
import { Section } from '@/shared/ui/Layout/Section/Section'
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
					Ваш путеводитель <br />в мир доставки грузов из Китая
				</h1>
				<h2 className={cls.Subheading}>
					Надежно транспортируем любые виды грузов для вашего бизнеса небом,
					морем и по суше.
				</h2>
				<div className={cls.ButtonContainer}>
					<PrimaryButton
						className={cls.PrimaryButton}
						text='Получить консультацию'
						onClick={() => setModalConsultOpen(true)}
					/>
				</div>
				<video
					itemScope
					itemType='http://schema.org/VideoObject'
					className={cls.Video}
					autoPlay
				>
					<source src='/videos/hero.mp4' type='video/mp4' />
					<meta itemProp='name' content='Name of the video' />
					<meta itemProp='description' content='Description of the video...' />
					<meta itemProp='duration' content='PT1M33S' />
					<meta itemProp='thumbnail' content='my-video-thumbnail-path.jpg' />
				</video>
			</div>
			<ConsultationModal
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
			/>
		</Section>
	)
}
