import { CTASection } from '@/sections/CTASection/CTASection'
import { AboutServiceSection } from '@/sections/SERVICES/AboutServiceSection/AboutServiceSection'
import { AdvantagesServiceSection } from '@/sections/SERVICES/AdvantagesServiceSection/AdvantagesServiceSection'
import { HeroServiceSection } from '@/sections/SERVICES/HeroServiceSection/HeroServiceSection'
import { StepServiceSectionSection } from '@/sections/SERVICES/StepServiceSection/StepServiceSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import cls from './page.module.scss'

export default function TMService() {
	return (
		<main>
			<Header />
			<HeroServiceSection
				img='/img/hero/hero-documents.svg'
				title='Таможенное сопровождение'
			/>
			<AdvantagesServiceSection
				items={[
					'Рассчитаем стоимость пошлин и сборов на выгодных условиях',
					'Произведем оплату таможенных платежей ',
					'Подготовим все необходимые закрывающие документы',
				]}
			/>
			<AboutServiceSection
				subtitle='Таможенное сопровождение'
				text={[
					'Процедура таможенного оформления обязательна для всех грузов, пересекающих границу. Наши эксперты помогут безопасно пройти контроль на таможне независимо от вида перевозки и категории груза.',
					'Закажите услугу таможенного сопровождения грузов, и мы определим коды ТН ВЭД, рассчитаем стоимость пошлин и сборов, произведем оплату. Поможем оформить все необходимые документы согласно таможенному законодательству: разрешения, сертификаты и лицензии',
					'На первоначальном этапе нам потребуются детальное описание товара и ценовые характеристики.',
				]}
				img='/img/services/documents.svg'
				alt='Таможенное сопровождение грузов из Китая'
			/>

			<StepServiceSectionSection
				title='Этапы таможенного оформления товара'
				subtitle=''
			>
				<div className={cls.StepContainer}>
					<ul className={cls.StepListNum}>
						<li className={cls.StepItemNum}>
							Проконсультируем по вопросам таможенного сопровождения, опираясь
							на предоставленные документы (контракт, инвойс и т.д.)
						</li>
						<li className={cls.StepItemNum}>
							Соберем и проанализируем все необходимые сопроводительные
							документы на груз
						</li>
						<li className={cls.StepItemNum}>
							Определим правильный код ТН ВЭД товара, учитывая все факторы и
							характеристики товара
						</li>
						<li className={cls.StepItemNum}>
							Определим таможенную стоимость товара, рассчитываем таможенные
							пошлины, налоги и сборы
						</li>
						<li className={cls.StepItemNum}>
							Подберем необходимый пакет документов для таможенного оформления
						</li>
						<li className={cls.StepItemNum}>
							Оплатим таможенные пошлины, налоги и сборы
						</li>
						<li className={cls.StepItemNum}>
							Лицензированный таможенный брокер подаст декларацию (ДТ) на
							таможню
						</li>
						<li className={cls.StepItemNum}>
							Итог: предоставим вам грузовую таможенную декларацию (ГТД) и акт
							на услуги
						</li>
					</ul>
				</div>
			</StepServiceSectionSection>

			<StepServiceSectionSection
				title='Как  происходит оплата таможенных пошлин'
				subtitle=''
			>
				<div className={cls.StepWrapper}>
					<div className={cls.StepContainer}>
						<p className={cls.StepVariant}>Вариант 1</p>
						<h3>Используем лицевой счет заказчика</h3>
						<p style={{ marginTop: '1.5rem' }}>
							С вашего счета спишутся таможенные пошлины и сборы, НДС. Комиссия
							0 рублей.
						</p>
					</div>
					<div className={cls.StepContainer}>
						<p className={cls.StepVariant}>Вариант 2</p>
						<h3>Берем оплату таможенных пошлин на себя</h3>
						<p style={{ marginTop: '1.5rem' }}>
							Оплатим таможенные пошлины и сборы со своего счета. Комиссия
							составит 2% от стоимости таможенных платежей.
						</p>
					</div>
				</div>
			</StepServiceSectionSection>

			<StepServiceSectionSection title='Дополнительные услуги' subtitle=''>
				<div className={cls.StepWrapper}>
					<div className={cls.StepContainer}>
						<ul className={cls.StepList}>
							<li className={cls.StepItem}>
								Помощь в получении необходимых разрешительных документов
							</li>
							<li className={cls.StepItem}>
								Юридическое сопровождение при взаимодействии с таможенными
								органами
							</li>
							<li className={cls.StepItem}>
								Представление ваших интересов при проведении таможенных операций
								с товарами, которые перемещаются с использованием карнетов АТА
							</li>
							<li className={cls.StepItem}>
								Осуществление санитарно-карантинного, ветеринарного и
								фитосанитарного контроля
							</li>
							<li className={cls.StepItem}>
								Подготовка полного пакета документов и получение
								предварительного решения о классификации товара
							</li>
						</ul>
					</div>
				</div>
			</StepServiceSectionSection>

			<CTASection
				title='Нужна помощь с таможенным оформлением?'
				subtitle='Оставить заявку'
				text='Оставьте заявку и мы проконсультируем бесплатно. Рассчитаем предварительную стоимость услуги и сформируем индивидуальное предложение.'
			/>
			<Footer />
		</main>
	)
}
