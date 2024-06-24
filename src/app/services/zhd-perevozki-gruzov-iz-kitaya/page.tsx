import { CTASection } from '@/sections/CTASection/CTASection'
import { AboutServiceSection } from '@/sections/SERVICES/AboutServiceSection/AboutServiceSection'
import { AdvantagesServiceSection } from '@/sections/SERVICES/AdvantagesServiceSection/AdvantagesServiceSection'
import { HeroServiceSection } from '@/sections/SERVICES/HeroServiceSection/HeroServiceSection'
import { StepServiceSectionSection } from '@/sections/SERVICES/StepServiceSection/StepServiceSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import cls from './page.module.scss'

export default function ZDService() {
	return (
		<main>
			<Header />
			<HeroServiceSection
				img='/img/hero/hero-locomotive-delivery.svg'
				title='Ж/Д перевозки грузов из Китая'
			/>
			<AdvantagesServiceSection
				items={['Доступная цена', 'Срок 25-40 дней', 'Практически любой груз']}
			/>
			<AboutServiceSection
				subtitle='Железнодорожные перевозки'
				text={[
					'Железнодорожные грузоперевозки - один из самых бюджетных способов транспортировки товаров из Китая. Можно заказать доставку поездом самых разных по весу и типу грузов. ',
					'Сроки доставки грузов по железной дороге не зависят от погодных условий. Это позволяет четко следовать графику. ',
					'Благодаря хорошо развитой железнодорожной инфраструктуре груз можно доставить практически в любую точку России.',
				]}
				img='/img/services/locomotive-delivery.svg'
				alt='Железнодорожные перевозки грузов из Китая'
			/>

			<StepServiceSectionSection
				title='Этапы перевозки груза ЖД транспортом'
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
							Мы арендуем ближайший контейнер и подаем его под загрузку
						</li>
						<li className={cls.StepItem}>
							Загруженный контейнер привозим на станцию отправления и оформляем
							на экспорт
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>2</p>
					<h3 className={cls.StepHeading}>Этап железнодорожной перевозки</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Отправляем контейнер по согласованному маршруту
						</li>
						<li className={cls.StepItem}>
							Решаем все возникающие сложности на перегрузке с состава на состав
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>3</p>
					<h3 className={cls.StepHeading}>Этап на российской стороне</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Осуществляем приемку контейнера на станции назначения,
							терминальную обработку, таможенное оформление
						</li>
						<li className={cls.StepItem}>
							Доставляем груз заказчику в согласованное место автомобильным
							транспортом
						</li>
						<li className={cls.StepItem}>
							Возвращаем порожний контейнер на терминал
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
							<li className={cls.StepItem}>
								Подача контейнера под загрузку: 1-2 дня
							</li>
							<li className={cls.StepItem}>
								Ожидание формирования состава: около 5 дней
							</li>
							<li className={cls.StepItem}>
								Чистое транзитное время: 14-17 дней
							</li>
							<li className={cls.StepItem}>Перегрузка на границе: 2-10 дней</li>
							<li className={cls.StepItem}>
								Приемка на станции назначения, терминальная обработка,
								таможенное оформление – 2-3 дня 
							</li>
						</ul>
					</div>
				</div>
			</StepServiceSectionSection>

			<CTASection
				title='Узнайте стоимость доставки вашего груза железнодорожным транспортом'
				subtitle='Оставить заявку'
				text='Оставьте заявку и наш менеджер свяжется с вами'
			/>
			<Footer />
		</main>
	)
}
