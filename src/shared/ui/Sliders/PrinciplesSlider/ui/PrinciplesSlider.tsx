'use client'
import { useCallback, useRef, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from '../../ArrowSlider/ArrowSlider'
import cls from './PrinciplesSlider.module.scss'

export const PrinciplesSlider = () => {
	const config = {
		slidesPerView: 3,
		breakpoints: {
			// when window width is <= 499px
			280: {
				slidesPerView: 1,
			},
			// when window width is <= 999px
			899: {
				slidesPerView: 3,
			},
		},
	}

	const [currentSlide, setCurrentSlide] = useState(1)
	const [slidesLength, setslidesLength] = useState(0)

	const sliderRef = useRef<SwiperRef>(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])

	return (
		<div style={{ height: '100%' }}>
			<Swiper
				ref={sliderRef}
				className={cls.Swiper}
				modules={[]}
				{...config}
				onSwiper={swiper => setslidesLength(swiper.slides.length)}
				onSlideChange={swiper => setCurrentSlide(swiper.activeIndex + 1)}
			>
				<SwiperSlide className={cls.Slide}>
					<div className={cls.Content}>
						<h3 className={cls.Subheading}>Наши Принципы</h3>

						<p className={cls.Title}>Люди</p>
						<p className={cls.Text}>
							Решения принимают людьми и мы сосредоточены на укреплении деловых
							связей, и развитии взаимоотношений со всеми участниками цепи
							поставок.
						</p>
					</div>
					<Navigation
						controlClass={cls.controlClass}
						currentSlide={currentSlide - 1}
						slidesLength={slidesLength - 1}
						handlePrev={handlePrev}
						handleNext={handleNext}
					/>
				</SwiperSlide>
				<SwiperSlide className={cls.Slide}>
					<div className={cls.Content}>
						<h3 className={cls.Subheading}>Наши Принципы</h3>

						<p className={cls.Title}>Бизнес</p>
						<p className={cls.Text}>
							Мы знаем, как функционируют производства, торговые и транспортные
							компании, банки и успешно применяем эти знания, чтобы увеличить
							прибыль наших клиентов.
						</p>
					</div>
					<Navigation
						controlClass={cls.controlClass}
						currentSlide={currentSlide - 1}
						slidesLength={slidesLength - 1}
						handlePrev={handlePrev}
						handleNext={handleNext}
					/>
				</SwiperSlide>
				<SwiperSlide className={cls.Slide}>
					<div className={cls.Content}>
						<h3 className={cls.Subheading}>Наши Принципы</h3>

						<p className={cls.Title}>Ответственность</p>
						<p className={cls.Text}>
							Мы активно адаптируемся к постоянно изменяющимся условиям и готовы
							отвечать за свои слова реальными деньгами.
						</p>
					</div>
					<Navigation
						controlClass={cls.controlClass}
						currentSlide={currentSlide - 1}
						slidesLength={slidesLength - 1}
						handlePrev={handlePrev}
						handleNext={handleNext}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
