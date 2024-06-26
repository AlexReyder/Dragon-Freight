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
	title: 'Автоперевозки грузов из Китая',
}

export default function AutoService() {
	return (
		<main>
			<Header />
			<HeroServiceSection
				img='/img/hero/hero-auto-delivery.svg'
				title='Автоперевозки грузов из Китая'
			/>
			<AdvantagesServiceSection
				items={[
					'Забор из любой точки Китая',
					'Срок 12-21 день',
					'Сборные или выделенные контейнеры',
				]}
			/>
			<AboutServiceSection
				subtitle='Автоперевозки'
				text={[
					'Если сравнивать с доставкой морем или поездом, автоперевозки самые быстрые и маневренные. Таможенный контроль также проводится быстро.',
					'Автодоставка подходит как для сборных грузов от 200 кг, так и для цельных партий 20 тонн. Срок доставки зависит от города отправления, города назначения и погодных условий. ',
					'Заберем груз из любой точки Китая. Работаем только с собственниками транспортных средств.',
				]}
				img='/img/services/auto-delivery.svg'
				alt='Автоперевозки грузов из Китая'
			/>

			<BetSection filter='avto' />

			<StepServiceSectionSection
				title='Этапы автомобильных грузоперевозок'
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
							Подаем машину под погрузку, оформляем товар на экспорт
						</li>
						<li className={cls.StepItem}>
							Автомобиль с китайскими номерами едет на транзитный склад в
							приграничном районе
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>2</p>
					<h3 className={cls.StepHeading}>
						Этап на стороне ТС (Таможенного союза){' '}
					</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Автомобиль, работающий в транзитной зоне, перевозит груз на
							сторону ТС
						</li>
						<li className={cls.StepItem}>Оформляем таможенную декларацию</li>
						<li className={cls.StepItem}>
							Автомобиль с российскими номерами едет на разгрузку
						</li>
					</ul>
				</div>
			</StepServiceSectionSection>

			<StepServiceSectionSection title='Дополнительные услуги' subtitle=''>
				<div className={cls.StepWrapper}>
					<div className={cls.StepContainer}>
						<h3 className={cls.StepHeading}>
							Доставка без перекладывания груза
						</h3>
						<ul className={cls.StepList}>
							<li className={cls.StepItem}>
								Груз перевозится в одном транспортном средстве
							</li>
							<li className={cls.StepItem}>
								Груз перевозится в контейнере. Автомобили меняются, контейнер
								остается закрытым
							</li>
						</ul>
					</div>
					<div className={cls.StepContainer}>
						<h3 className={cls.StepHeading}>Два водителя в машине</h3>
						<p style={{ marginTop: '1.5rem' }}>
							Автомобиль едет без длительных остановок, что сокращает время
							доставки
						</p>
					</div>
				</div>
			</StepServiceSectionSection>

			<CTASection
				theme='Автоперевозки'
				title='Узнайте стоимость доставки вашего груза автомобильным  транспортом'
				subtitle='Оставить заявку'
				text='Оставьте заявку и наш менеджер свяжется с вами'
			/>
			<Footer />
		</main>
	)
}
