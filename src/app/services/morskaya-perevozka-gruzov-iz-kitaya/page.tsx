import { BetSection } from '@/sections/BetSection/BetSection'
import { CTASection } from '@/sections/CTASection/CTASection'
import { AboutServiceSection } from '@/sections/SERVICES/AboutServiceSection/AboutServiceSection'
import { AdvantagesServiceSection } from '@/sections/SERVICES/AdvantagesServiceSection/AdvantagesServiceSection'
import { HeroServiceSection } from '@/sections/SERVICES/HeroServiceSection/HeroServiceSection'
import { StepServiceSectionSection } from '@/sections/SERVICES/StepServiceSection/StepServiceSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Metadata } from 'next'
import cls from './page.module.scss'

export const metadata: Metadata = {
	title: 'Морская перевозка грузов из Китая',
}

export default function OceanService() {
	return (
		<main>
			<Header />
			<HeroServiceSection
				img='/img/hero/hero-water-delivery.svg'
				title='Морская перевозка грузов из Китая'
			/>
			<AdvantagesServiceSection
				items={[
					'Бюджетно и безопасно',
					'Срок 35-60 дней',
					'Практически любой груз',
				]}
			/>
			<AboutServiceSection
				subtitle='Морская перевозка'
				text={[
					'Доставка грузов из Китая морем - самый бюджетный вид транспортировки, при котором можно перевозить практически любые грузы, в том числе негабаритные. За один рейс возможно доставить большую партию товара.',
					'Морские грузоперевозки обычно входят в мультимодальную доставку. Вероятно, придется использовать другие виды транспорта для перевозки груза в порт отправления и из порта прибытия до конечного места назначения. ',
					'Срок доставки зависит от расписания хождения судов в линии, удаленности от порта отправления/прибытия, маршрута, погодных условий, состояния инфраструктуры в порту.',
				]}
				img='/img/services/water-delivery.svg'
				alt='Морская перевозка грузов из Китая'
			/>

			<BetSection filter='ocean' />

			<StepServiceSectionSection
				title='Этапы перевозки груза морским транспортом'
				subtitle=''
			>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>1</p>
					<h3 className={cls.StepHeading}>Этап на китайской стороне</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Поставщик сообщает о готовности отгрузить товар
						</li>
						<li className={cls.StepItem}>
							Мы арендуем ближайший контейнер и подаем под загрузку
						</li>
						<li className={cls.StepItem}>
							Загруженный контейнер привозим в порт отправления и оформляем на
							экспорт
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>2</p>
					<h3 className={cls.StepHeading}>Этап морской перевозки</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Отправляем контейнер по согласованному маршруту
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>3</p>
					<h3 className={cls.StepHeading}>Этап на российской стороне</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							 Осуществляем приемку контейнера в порту назначения, терминальную
							обработку, таможенное оформление
						</li>
						<li className={cls.StepItem}>
							Доставляем груз заказчику в согласованное место автомобильным или
							железнодорожным транспортом
						</li>
					</ul>
				</div>
			</StepServiceSectionSection>

			<StepServiceSectionSection
				title='Ориентировочные сроки доставки с даты готовности груза'
				subtitle=''
			>
				<div className={cls.StepWrapper}>
					<div className={cls.StepContainer}>
						<ul className={cls.StepList}>
							<li className={cls.StepItem}>Из Китая в Москву – 35-45 дней </li>
							<li className={cls.StepItem}>
								Из Китая в Санкт-Петербург – 60 дней 
							</li>
							<li className={cls.StepItem}>
								Из Китая в Новороссийск – 35-40 дней
							</li>
						</ul>
					</div>
				</div>
			</StepServiceSectionSection>

			<CTASection
				theme='Морская перевозка'
				title='Узнайте стоимость доставки вашего груза морским  транспортом'
				subtitle='Оставить заявку'
				text='Оставьте заявку и наш менеджер свяжется с вами'
			/>
			<Footer />
		</main>
	)
}
