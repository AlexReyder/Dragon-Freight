'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton'

import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'
import Link from 'next/link'
import cls from './Service.module.scss'

interface ServiceProps {
	title: string
	description: string
	src: string
	advantages: string[]
}

export const Service = ({
	title,
	description,
	src,
	advantages,
}: ServiceProps) => {
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
							<PrimaryButton text='Получить консультацию' />
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
		</div>
	)
}
