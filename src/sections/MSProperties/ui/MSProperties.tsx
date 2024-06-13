import { ExperienceIcon } from '@/shared/ui/Icons/ExperienceIcon/ExperienceIcon'
import { GuaranteeIcon } from '@/shared/ui/Icons/GuaranteeIcon/GuaranteeIcon'
import { HandsIcon } from '@/shared/ui/Icons/HandsIcon/HandsIcon'
import { PathIcon } from '@/shared/ui/Icons/PathIcon/PathIcon'
import { TimeIcon } from '@/shared/ui/Icons/TimeIcon/TimeIcon'
import { WorkIcon } from '@/shared/ui/Icons/WorkIcon/WorkIcon'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './MSProperties.module.scss'

export const MSProperties = () => {
	return (
		<Section id='advantages' className={cls.Section}>
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
					icon={<ExperienceIcon className={cls.Icon} />}
				/>
				<Property
					title='Полное сопровождение'
					text='Мы берём на себя все заботы с транспортировкой грузов, освобождая вас от лишних хлопот и позволяя сосредоточиться на развитии Вашего бизнеса. '
					icon={<PathIcon className={cls.Icon} />}
				/>
				<Property
					title='Быстрые ставки'
					text='Возможность оперативно отвечать транспортным требованиям клиента в низкий или высокий сезон по разумной цене. '
					icon={<HandsIcon className={cls.Icon} />}
				/>
				<Property
					title='Скорость доставки'
					text='Cокращаем сроки доставки вашего груза благодаря использованию проверенных маршрутов. '
					icon={<TimeIcon className={cls.Icon} />}
				/>
				<Property
					title='Сохранность груза'
					text='Обеспечиваем надёжную упаковку и страхование грузов, чтобы Вы могли быть уверены в сохранности своих товаров во время перевозки. '
					icon={<GuaranteeIcon className={cls.Icon} />}
				/>
				<Property
					title='Отлаженная работа'
					text='Информируем своих клиентов исчерпывающей информацией по стоимости услуг, срокам выполнения задачи, оптимальному маршруту и транспорту. '
					icon={<WorkIcon className={cls.Icon} />}
				/>
			</ul>
		</Section>
	)
}

interface Property {
	title: string
	text: string
	icon: any
}
const Property = ({ title, text, icon }: Property) => {
	return (
		<li className={cls.PropertyItem}>
			{icon}
			<p className={cls.PropertyTitle}>{title}</p>
			<p className={cls.PropertyText}>{text}</p>
		</li>
	)
}
