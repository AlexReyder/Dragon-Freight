'use client'
import CountUp from 'react-countup'
import cls from './FactsList.module.scss'

export const FactsList = () => {
	return (
		<ul className={cls.FactsList}>
			<AboutFacts
				number={92}
				suffix='%'
				text='Клиентов обращаются к нам за услугами повторно'
			/>
			<AboutFacts
				number={0}
				suffix='₽'
				text='Скрытых платежей. Только прозрачное ценообразование'
			/>
			<AboutFactsDouble
				number1={24}
				number2={7}
				text='Ответим на любые
вопросы в любое
время суток'
			/>
			<AboutFacts number={10} suffix='+' text='Опыт каждого сотрудника' />
			<AboutFacts number={3} prefix='' text='Дня минимальный срок доставки' />
			<AboutFacts number={87} suffix='%' text='Грузов доставляются раньше' />
		</ul>
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
