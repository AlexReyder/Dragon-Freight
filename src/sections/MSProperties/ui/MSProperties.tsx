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
						Четко выполняем свои обязательства, поэтому с нами{' '}
						<span className={cls.Colored}>выгодно работать</span>
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
					text='Мы берём на себя все заботы по транспортировке грузов из Китая, включая оформление документов и решение сложных ситуаций. '
					icon={<PathIcon className={cls.Icon} />}
				/>
				<Property
					title='Гарантия неизменности цены'
					text='Все расходы прописываются в договоре и не меняются в ходе транспортировки. Непредвиденные расходы компенсируем за счет компании. '
					icon={<HandsIcon className={cls.Icon} />}
				/>
				<Property
					title='Скорость доставки'
					text='Сокращаем сроки доставки вашего груза благодаря использованию оптимальных маршрутов и проверенных перевозчиков. '
					icon={<TimeIcon className={cls.Icon} />}
				/>
				<Property
					title='Сохранность груза'
					text='Обеспечиваем надежную упаковку и страхование грузов. Контролируем состояние груза на всех этапах доставки. '
					icon={<GuaranteeIcon className={cls.Icon} />}
				/>
				<Property
					title='Клиентский сервис 24/7'
					text='Всегда остаемся на связи, отвечаем на вопросы и держим в курсе всех ключевых этапов работы. '
					icon={<WorkIcon className={cls.Icon} />}
				/>
			</ul>
		</Section>
	)
}

interface Property {
	className?: string
	title: string
	text: string
	icon: any
}
export const Property = ({ title, text, icon, className = '' }: Property) => {
	return (
		<li className={cls.PropertyItem}>
			{icon}
			<p className={cls.PropertyTitle}>{title}</p>
			<p className={`${cls.PropertyText} ${className}`}>{text}</p>
		</li>
	)
}
