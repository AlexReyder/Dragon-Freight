import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import cls from './BetSection.module.scss'

async function getData() {
	'use server'

	const res = await axios(`${process.env}/api/bets/get`, {
		headers: {
			'Cache-Control': 'no-cache',
			Pragma: 'no-cache',
			Expires: '0',
		},
	})
		.then(res => {
			return res.data
		})
		.catch(e => console.log(e))
	return await res
}

export const BetSection = async () => {
	let data = await getData()
	console.log(Array.isArray(data) && data.length > 0)
	const sliderConfig = {
		slidesPerView: 3,
		spaceBetween: 30,
		breakpoints: {
			// when window width is <= 499px
			280: {
				slidesPerView: 1,
			},
			// when window width is <= 999px
			500: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
		},
	}
	return (
		<Section>
			{Array.isArray(data) && data.length > 0 ? (
				<Container>
					<Headings
						title={
							<span>
								Актуальные <span className={cls.Colored}>ставки </span>
							</span>
						}
						subtitle='Цены'
					/>
					<ArrowSlider controlClass={cls.Navigation} config={sliderConfig}>
						{data.map((item: any) => {
							return (
								<div className={cls.Card}>
									<div className={cls.ImageContainer}>
										<Image
											src='/img/bets/china.png'
											alt='Актуальные ставки на доставку грузов из Китая'
											width={48}
											height={48}
										/>
									</div>
									<p className={cls.CardText}>{item.text}</p>
								</div>
							)
						})}
					</ArrowSlider>
					<div className={cls.LinkContainer}>
						<Link
							href='https://t.me/dragonfreight'
							target='_blank'
							className={cls.TelegramLink}
						>
							Перейти в телеграмм &nbsp;&nbsp; &rarr;
						</Link>
					</div>
				</Container>
			) : null}
		</Section>
	)
}
