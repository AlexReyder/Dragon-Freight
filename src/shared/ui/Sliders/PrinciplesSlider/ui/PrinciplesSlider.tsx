'use client'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import cls from './PrinciplesSlider.module.scss'

export const PrinciplesSlider = () => {
	return (
		<Swiper className={cls.Swiper} slidesPerView={3}>
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
			</SwiperSlide>
		</Swiper>
	)
}
