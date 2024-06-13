import { Service } from '@/features/Service'
import { servicesData } from '@/shared/data/services'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './ServicesSection.module.scss'

export const ServicesSection = () => {
	return (
		<Section id='services'>
			<Container>
				<Headings
					title={
						<span>
							Оказываем весь комплекс услуг <br />
							по транспортировке
							<span className={cls.Colored}> грузов из Китая</span>
						</span>
					}
					subtitle='Услуги'
					color='b'
					className={cls.Heading}
				/>
				<div className={cls.main}>
					{servicesData.map((project, i) => {
						return <Service key={`p_${i}`} {...project} />
					})}
				</div>
			</Container>
		</Section>
	)
}
