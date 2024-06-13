'use client'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Image from 'next/image'
import CountUp from 'react-countup'
import Marquee from 'react-fast-marquee'
import cls from './AboutSection.module.scss'
import Character from './Character'

const phrase =
	'Ваш надёжный партнёр в мире логистики - DRAGON FREIGHT. Мы специализируемся на доставке грузов из Китая и гарантируем соблюдение сроков и сохранность вашего товара. Поможем организовать процесс доставки, подберем оптимальный маршрут и вид транспорта.'

export const AboutSection = () => {
	// const words = phrase.split(' ')

	return (
		<Section id='product-text' className={cls.Section}>
			<Container className={cls.Container}>
				<h3 className={cls.Subheading}>О компании</h3>
				<Character paragraph={phrase} />
				<ul className={cls.FactsList}>
					<AboutFacts
						number={150}
						suffix='+'
						text='Клиентов обращаются к нам за услугами повторно'
					/>
					<AboutFacts
						number={9}
						prefix='>'
						text='Лет успешно перевозим грузы для вас'
					/>
					<AboutFactsDouble
						number1={24}
						number2={7}
						text='Ответим на любые
вопросы в любое
время суток'
					/>
					<AboutFacts number={10} suffix='+' text='Опыт каждого сотрудника' />
					<AboutFacts
						number={3}
						prefix=''
						text='Дня минимальный срок доставки'
					/>
					<AboutFacts
						number={87}
						suffix='%'
						text='Грузов доставляются раньше'
					/>
				</ul>
				<Marquee className={cls.Marquee} pauseOnHover={true}>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/1.png'
							alt='Наш партнер'
							width={80}
							height={60}
							className={cls.Partners}
						/>
					</div>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/2.png'
							alt='Наш партнер'
							width={267}
							height={60}
							className={cls.Partners}
						/>
					</div>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/3.png'
							alt='Наш партнер'
							width={172}
							height={60}
							className={cls.Partners}
						/>
					</div>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/4.png'
							alt='Наш партнер'
							width={205}
							height={60}
							className={cls.Partners}
						/>
					</div>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/5.png'
							alt='Наш партнер'
							width={213}
							height={60}
							className={cls.Partners}
						/>
					</div>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/6.png'
							alt='Наш партнер'
							width={58}
							height={60}
							className={cls.Partners}
						/>
					</div>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/7.png'
							alt='Наш партнер'
							width={69}
							height={60}
							className={cls.Partners}
						/>
					</div>
					<div className={cls.PartnersWrapper}>
						<Image
							src='/img/partners/8.jpg'
							alt='Наш партнер'
							width={188}
							height={60}
							className={cls.Partners}
						/>
					</div>
				</Marquee>
			</Container>
		</Section>
	)
}

interface AboutFactsP {
	number: number
	text: string
	prefix?: string
	suffix?: string
}

const AboutFacts = ({
	number,
	text,
	prefix = '',
	suffix = '',
}: AboutFactsP) => {
	return (
		<li className={cls.FactsItem}>
			<CountUp
				start={0}
				end={number}
				duration={2.75}
				separator=''
				decimals={0}
				prefix={prefix}
				suffix={suffix}
				enableScrollSpy={true}
				scrollSpyOnce={true}
			>
				{({ countUpRef }) => (
					<div>
						<span ref={countUpRef} className={cls.FactsNumber} />
					</div>
				)}
			</CountUp>
			{/* <p className={cls.FactsNumber}>{number}</p> */}
			<p className={cls.FactsText}>
				<span className={cls.Colored}>{text.split(' ')[0]} </span>
				{text.split(' ').slice(1).join(' ')}
			</p>
		</li>
	)
}

interface AboutFactsDP {
	number1: number
	number2: number
	text: string
}

const AboutFactsDouble = ({ number1, number2, text }: AboutFactsDP) => {
	return (
		<li className={cls.FactsItem}>
			<CountUp
				start={0}
				end={number1}
				duration={2.75}
				separator=' '
				decimals={0}
				prefix=''
				suffix=''
				enableScrollSpy={true}
				scrollSpyOnce={true}
			>
				{({ countUpRef }) => (
					<span ref={countUpRef} className={cls.FactsNumber} />
				)}
			</CountUp>
			<span className={cls.FactsNumber}>/</span>
			<CountUp
				start={0}
				end={number2}
				duration={2.75}
				separator=' '
				decimals={0}
				prefix=''
				suffix=''
				enableScrollSpy={true}
				scrollSpyOnce={true}
			>
				{({ countUpRef }) => (
					<span ref={countUpRef} className={cls.FactsNumber} />
				)}
			</CountUp>
			{/* <p className={cls.FactsNumber}>{number}</p> */}
			<p className={cls.FactsText}>
				<span className={cls.Colored}>{text.split(' ')[0]} </span>
				{text.split(' ').slice(1).join(' ')}
			</p>
		</li>
	)
}
