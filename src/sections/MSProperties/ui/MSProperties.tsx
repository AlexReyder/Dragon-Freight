import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Image from 'next/image'
import cls from './MSProperties.module.scss'

export const MSProperties = () => {
	return (
		<Section id='properties' className={cls.Section}>
			<Headings
				title={
					<span>
						6 причин доверить свой <span className={cls.Colored}>груз</span> нам
					</span>
				}
				subtitle='Преимущества'
				className={cls.Heading}
			/>
			<ul className={cls.PropertyList}>
				<Property
					title='Опыт и профессионализм'
					text='Индивидуальный опыт каждого нашего сотрудника насчитывает от 10 лет в сферах логистики, закупок, транспортировке и таможенном оформление.  '
					icon='/img/advantages/experience.svg'
				/>
				<Property
					title='Полное сопровождение'
					text='Мы берём на себя все заботы с транспортировкой грузов, освобождая вас от лишних хлопот и позволяя сосредоточиться на развитии Вашего бизнеса. '
					icon='/img/advantages/path.svg'
				/>
				<Property
					title='Быстрые ставки'
					text='Возможность оперативно отвечать транспортным требованиям клиента в низкий или высокий сезон по разумной цене. '
					icon='/img/advantages/hands.svg'
				/>
				<Property
					title='Скорость доставки'
					text='Cокращаем сроки доставки вашего груза благодаря использованию проверенных маршрутов. '
					icon='/img/advantages/time.svg'
				/>
				<Property
					title='Сохранность груза'
					text='Обеспечиваем надёжную упаковку и страхование грузов, чтобы Вы могли быть уверены в сохранности своих товаров во время перевозки. '
					icon='/img/advantages/guarantee.svg'
				/>
				<Property
					title='Отлаженная работа'
					text='Информируем своих клиентов исчерпывающей информацией по стоимости услуг, срокам выполнения задачи, оптимальному маршруту и транспорту. '
					icon='/img/advantages/work.svg'
				/>
			</ul>
		</Section>
	)
}

interface Property {
	title: string
	text: string
	icon: string
}
const Property = ({ title, text, icon }: Property) => {
	return (
		<li className={cls.PropertyItem}>
			<Image src={icon} width={24} height={24} alt={title} />
			<p className={cls.PropertyTitle}>{title}</p>
			<p className={cls.PropertyText}>{text}</p>
		</li>
	)
}
