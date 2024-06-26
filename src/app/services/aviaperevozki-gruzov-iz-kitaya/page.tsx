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
	title: 'Авиаперевозки грузов из Китая',
}

export default function AviaService() {
	return (
		<main>
			<Header />
			<HeroServiceSection
				img='/img/hero/hero-air-delivery.svg'
				title='Авиаперевозки грузов из Китая'
			/>
			<AdvantagesServiceSection
				items={[
					'Быстрая и надежная доставка',
					'Срок 3-12 дней',
					'Прямые и непрямые рейсы',
				]}
			/>
			<AboutServiceSection
				subtitle='Авиаперевозки'
				text={[
					'Доставка самолётом – самый быстрый и надежный среди других способов грузоперевозок. Таможенный контроль также проводится быстро. Срок доставки зависит от характера груза, удаления завода от аэропорта, расписания вылетов и свободных мест.',
					'Авиадоставка хорошо подходит для хрупких грузов, медикаментов или срочной доставки, но имеет ограничения по весу и объему. ',
					'Основные города отправки прямых рейсов в Россию: Пекин, Гуанчжоу, Шанхай. Работаем с линиями CZ, MU, RF, 3U',
				]}
				img='/img/services/air-delivery.svg'
				alt='Авиаперевозки грузов из Китая'
			/>

			<BetSection filter='air' />

			<StepServiceSectionSection
				title='Этапы перевозки груза прямым рейсом'
				subtitle='Срок доставки 3-7 дней'
			>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>0</p>
					<h3 className={cls.StepHeading}>День 0 </h3>
					<p className={cls.StepSubheading}>Из-за разницы во времени 5 часов</p>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Поставщик сообщает о готовности отдать груз
						</li>
						<li className={cls.StepItem}>
							Мы связываемся с поставщиком и договариваемся о времени забора
							груза
						</li>
						<li className={cls.StepItem}>
							Резервируем место в выкупленном объеме самолета
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>1</p>
					<h3 className={cls.StepHeading}>День 1 </h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Забираем груз и везем его в аэропорт
						</li>
						<li className={cls.StepItem}>Оформляем экспортную декларацию</li>
						<li className={cls.StepItem}>
							Помещаем груз на склад временного хранения (СВХ)
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>2</p>
					<h3 className={cls.StepHeading}>День 2 </h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Вылет самолета из аэропорта отправления
						</li>
						<li className={cls.StepItem}>
							Прилет самолета в аэропорт назначения
						</li>
						<li className={cls.StepItem}>
							Подаем документы на таможенное оформление
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<p className={cls.StepDecorative}>3</p>
					<h3 className={cls.StepHeading}>День 3 </h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>Растаможиваем груз в аэропорту</li>
						<li className={cls.StepItem}>Перевозим груз заказчику</li>
					</ul>
				</div>
			</StepServiceSectionSection>

			<StepServiceSectionSection
				title='Перевозка груза непрямым рейсом'
				subtitle='Срок доставки 7-12 дней'
			>
				<article>
					<p className={cls.StepArticle}>
						При таком виде доставки груз вылетает из порта отправления в
						транзитный порт с дальнейшим перелетом до порта назначения. <br />
						Существуют риски задержек и повреждения груза в транзитных
						терминалах.
					</p>
				</article>
				<div className={cls.StepContainer}>
					<h3 className={cls.StepHeading}>
						Когда необходима доставка непрямым рейсом
					</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>
							Нет прямых рейсов из порта отправления в порт назначения
						</li>
						<li className={cls.StepItem}>
							Необходимо снижение стоимости перевозки
						</li>
						<li className={cls.StepItem}>
							Тип груза не берут на борт прямые рейсы
						</li>
					</ul>
				</div>
				<div className={cls.StepContainer}>
					<h3 className={cls.StepHeading}>
						Дополнительные услуги для габаритных грузов
					</h3>
					<ul className={cls.StepList}>
						<li className={cls.StepItem}>Автовывоз товара в РФ</li>
						<li className={cls.StepItem}>Таможенное оформление</li>
						<li className={cls.StepItem}>
							Организацию перелета внутри нашей страны
						</li>
					</ul>
				</div>
			</StepServiceSectionSection>

			<CTASection
				theme='Авиаперевозки'
				title='Узнайте стоимость доставки вашего груза авиатранспортом'
				subtitle='Оставить заявку'
				text='Оставьте заявку и наш менеджер свяжется с вами'
			/>
			<Footer />
		</main>
	)
}
