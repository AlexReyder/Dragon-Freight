import { CTASection } from '@/sections/CTASection/CTASection'
import { Property } from '@/sections/MSProperties/ui/MSProperties'
import { AboutServiceSection } from '@/sections/SERVICES/AboutServiceSection/AboutServiceSection'
import { AdvantagesServiceSection } from '@/sections/SERVICES/AdvantagesServiceSection/AdvantagesServiceSection'
import { HeroServiceSection } from '@/sections/SERVICES/HeroServiceSection/HeroServiceSection'
import { StepServiceSectionSection } from '@/sections/SERVICES/StepServiceSection/StepServiceSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Metadata } from 'next'
import cls from './page.module.scss'

export const metadata: Metadata = {
	title: 'Аутсорсинг ВЭД',
}

export default function VEDService() {
	return (
		<main>
			<Header />
			<HeroServiceSection
				img='/img/hero/hero-outsorsing.svg'
				title='Аутсорсинг ВЭД'
				subtitle='Организуем бизнес с Китаем «под ключ»'
			/>
			<AdvantagesServiceSection
				items={[
					'Поиск поставщика или производителя',
					'Организация закупки и доставки товара ',
					'Подготовка всей документации',
				]}
			/>
			<AboutServiceSection
				subtitle='Аутсорсинг ВЭД'
				text={[
					'Аутсорсинг в сфере внешнеэкономической деятельности — это передача функций по импорту товаров сторонней организации. При помощи услуги аутсорсинга ВЭД вы сможете решить задачи по закупке, доставке и таможенному оформлению товаров из Китая.',
					'Наши специалисты возьмут на себя организацию международных закупок, а вы сможете сосредоточиться на задачах бизнеса внутри страны. От вас потребуется только озвучить идею товара и предполагаемый объем поставки. Все задачи от поиска поставщика до оформления документов для бухгалтерии вы можете доверить нам.',
				]}
				img='/img/services/outsorsing.svg'
				alt='Аутсорсинг ВЭД'
			/>

			<StepServiceSectionSection
				title='Преимущества аутсорсинга ВЭД'
				subtitle=''
			>
				<div className={cls.StepContainerGrid}>
					<ul className={cls.StepListGrid}>
						<Property
							title=''
							text='Сотрудничество только с одним надежным агентом. Переговоры с Китаем, оплату и сложности поставок возьмем на себя '
							icon={<p className={cls.TextIcon}>01</p>}
							className={cls.AdvantageText}
						/>
						<Property
							title=''
							text='Уменьшение затрат на заключение сделки с иностранным партнером по сравнению с самостоятельным решением задач '
							icon={<p className={cls.TextIcon}>02</p>}
							className={cls.AdvantageText}
						/>
						<Property
							title=''
							text='Исключите все риски, связанные с валютным контролем банков и таможенными органами '
							icon={<p className={cls.TextIcon}>03</p>}
							className={cls.AdvantageText}
						/>
						<Property
							title=''
							text='Будете в курсе всех процессов:
оплата в Китае, производство, проверка качества, доставка, таможенное оформление'
							icon={<p className={cls.TextIcon}>04</p>}
							className={cls.AdvantageText}
						/>
					</ul>
				</div>
			</StepServiceSectionSection>

			<StepServiceSectionSection
				title='Какие задачи мы можем решить вместо вас'
				subtitle=''
			>
				<div className={cls.StepContainer}>
					<ul className={cls.StepListNum}>
						<li className={cls.StepItemNum}>
							Найдем и проверим поставщика в Китае
						</li>
						<li className={cls.StepItemNum}>
							Подготовим внешнеторговый контракт
						</li>
						<li className={cls.StepItemNum}>
							Привезем и согласуем с вами образцы
						</li>
						<li className={cls.StepItemNum}>
							Правильно проведем финансовые операции, чтобы деньги дошли в Китай
						</li>
						<li className={cls.StepItemNum}>
							Проконтролируем сроки и качество производства
						</li>
						<li className={cls.StepItemNum}>
							Выпустим разрешительные документы
						</li>
						<li className={cls.StepItemNum}>
							Застрахуем груз в ВСК страхование
						</li>
						<li className={cls.StepItemNum}>
							Организуем отгрузку и проконтролируем груз в пути следования
						</li>
						<li className={cls.StepItemNum}>
							Подготовим полный комплект документов для таможни
						</li>
						<li className={cls.StepItemNum}>
							Защитим ваши интересы в таможенных органах
						</li>
						<li className={cls.StepItemNum}>
							Оформим все документы и передадим в вашу бухгалтерию
						</li>
						<li className={cls.StepItemNum}>Передадим Вам готовый товар</li>
					</ul>
				</div>
			</StepServiceSectionSection>

			<StepServiceSectionSection
				title='Поможем купить и привезти товар из Китая за 7 шагов'
				subtitle=''
			>
				<div className={cls.StepWrapper}>
					<div className={cls.StepContainer}>
						<ul className={cls.StepListNumbers}>
							<li className={cls.StepItemNumbers}>
								Вы заключаете с нами договор на поставку товаров. Мы, в свою
								очередь, заключаем контракт с производителем на закупку товаров
								для вас
							</li>
							<li className={cls.StepItemNumbers}>
								Вы оплачиваете товары в рублях. Мы конвертируем рубли в валюту и
								производим оплату за товары производителю
							</li>
							<li className={cls.StepItemNumbers}>
								Организуем доставку товаров из Китая на территорию РФ подходящим
								маршрутом и видом транспорта
							</li>
							<li className={cls.StepItemNumbers}>
								Готовим необходимую разрешительную документацию для ввоза
								товаров (сертификаты, декларации соответствия, лицензии и т. п.)
							</li>
							<li className={cls.StepItemNumbers}>
								Оплачиваем все необходимые таможенные платежи
							</li>
							<li className={cls.StepItemNumbers}>
								Выставляем вам окончательный счёт за товары
							</li>
							<li className={cls.StepItemNumbers}>
								Передаем вам товар со всеми необходимыми документами, включая
								копию таможенной декларации
							</li>
						</ul>
					</div>
				</div>
			</StepServiceSectionSection>

			<CTASection
				theme='Аутсорсинг ВЭД'
				title='Доверьте доставку груза из Китая профессионалам'
				subtitle='Оставить заявку'
				text='Оставьте номер телефона. Наш сотрудник подробно ответит на все ваши вопросы и рассчитает стоимость.'
			/>
			<Footer />
		</main>
	)
}
