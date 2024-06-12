'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import Link from 'next/link'
import { useRef } from 'react'
import cls from './Service.module.scss'

interface ServiceProps {
	i: number
	title: string
	description: string
	src: string

	color: string
	progress: any
	range: any
	targetScale: any
	numbers: any
}

export const Service = ({
	i,
	title,
	description,
	src,

	color,
	progress,
	range,
	targetScale,
	numbers,
}: ServiceProps) => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'start start'],
	})

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div ref={container} className={cls.cardContainer}>
			<motion.div
				style={{
					scale,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className={cls.card}
			>
				<div className={cls.body}>
					<div className={cls.description}>
						<h2 className={cls.Title}>{title}</h2>
						<p className={cls.Text}>{description}</p>
						<ul className={cls.NumberList}>
							<li className={cls.NumberItem}>
								<p>
									<span className={cls.Number}>{numbers[0].number}</span>
									<span className={cls.NumberMeasure}>
										{numbers[0].measure}
									</span>
								</p>
								<span className={cls.NumberDescription}>
									{numbers[0].description}
								</span>
							</li>
							<li className={cls.NumberItem}>
								<p>
									<span className={cls.Number}>{numbers[0].number}</span>
									<span className={cls.NumberMeasure}>
										{numbers[0].measure}
									</span>
								</p>
								<span className={cls.NumberDescription}>
									{numbers[0].description}
								</span>
							</li>
							<li className={cls.NumberItem}>
								<p>
									<span className={cls.Number}>{numbers[0].number}</span>
									<span className={cls.NumberMeasure}>
										{numbers[0].measure}
									</span>
								</p>
								<span className={cls.NumberDescription}>
									{numbers[0].description}
								</span>
							</li>
						</ul>
						<div className={cls.ActionWrapper}>
							<PrimaryButton text='Получить консультацию' />
							<Link href='/' className={cls.LinkMore}>
								Подробнее &rarr;
							</Link>
							<Link
								href='https://t.me/dragonfreight'
								target='_blank'
								className={cls.LinkTelegram}
							>
								Актуальные цены в Телеграмме &rarr;
							</Link>
						</div>
					</div>

					<div className={cls.imageContainer}>
						<motion.div className={cls.inner} style={{ scale: imageScale }}>
							<Image fill src={`${src}`} alt='image' />
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
