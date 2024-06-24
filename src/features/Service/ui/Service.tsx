'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton'

import { ConsultationModal } from '@/features/ConsultationModal'
import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'
import Link from 'next/link'
import { useState } from 'react'
import cls from './Service.module.scss'

interface ServiceProps {
	title: string
	description: string
	serviceLink: string
	src: string
	advantages: string[]
}

export const Service = ({
	title,
	serviceLink,
	description,
	src,
	advantages,
}: ServiceProps) => {
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)
	const handleModalClose = () => {
		setModalConsultOpen(false)
	}
	return (
		<div className={cls.cardContainer}>
			<div className={cls.card}>
				<div className={cls.body}>
					<div className={cls.description}>
						<h2 className={cls.Title}>{title}</h2>
						<p className={cls.Text}>{description}</p>

						<ul className={cls.Advantages}>
							<li className={cls.Advantage}>
								<OkIcon className={cls.AdvantageIcon} />
								<p className={cls.AdvantageText}>{advantages[0]}</p>
							</li>
							<li className={cls.Advantage}>
								<OkIcon className={cls.AdvantageIcon} />
								<p className={cls.AdvantageText}>{advantages[1]}</p>
							</li>
							<li className={cls.Advantage}>
								<OkIcon className={cls.AdvantageIcon} />
								<p className={cls.AdvantageText}>{advantages[2]}</p>
							</li>
						</ul>

						<div className={cls.ActionWrapper}>
							<div className={cls.ActionMain}>
								<PrimaryButton
									text='Получить консультацию'
									onClick={() => setModalConsultOpen(true)}
								/>
								<Link href={serviceLink} className={cls.TelegramLink}>
									Подробнее &nbsp;&nbsp; &rarr;
								</Link>
							</div>

							<Link
								href='https://t.me/dragonfreight'
								target='_blank'
								className={cls.TelegramLink}
							>
								Актуальные ставки в телеграмме &nbsp;&nbsp; &rarr;
							</Link>
						</div>
					</div>

					<div className={cls.imageContainer}>
						<img src={`${src}`} alt='image' />
					</div>
				</div>
			</div>
			<ConsultationModal
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
			/>
		</div>
	)
}
