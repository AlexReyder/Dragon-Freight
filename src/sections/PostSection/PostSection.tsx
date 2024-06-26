import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import Link from 'next/link'
import cls from './PostSection.module.scss'

const getData = async () => {
	'use server'

	const res = await fetch(`${process.env.domainUrl}/api/news/get`, {
		headers: {
			'Cache-Control': 'no-cache',
			Pragma: 'no-cache',
			Expires: '0',
		},
	})
	return await res.json()
}

export const PostSection = async () => {
	let data = await getData()
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
			<Container>
				<Headings
					title={
						<span>
							Истории из <span className={cls.Colored}>жизни компании</span>
						</span>
					}
					subtitle='Новости'
				/>
				<ArrowSlider controlClass={cls.Navigation} config={sliderConfig}>
					{data.map((item: any) => {
						return (
							<div className={cls.Card}>
								<div className={cls.ImageWrapper}>
									<img src={item.thumbnail} alt={item.title} />
								</div>

								<p className={cls.CardText}>
									{item.title}
									{/* {item.text.replace('\n', '<br/>')} */}
								</p>
								<div className={cls.LinkContainer}>
									<Link
										href={`/posts/${item.slug}`}
										className={cls.TelegramLink}
									>
										Читать &nbsp;&nbsp; &rarr;
									</Link>
								</div>
							</div>
						)
					})}
				</ArrowSlider>
			</Container>
		</Section>
	)
}
