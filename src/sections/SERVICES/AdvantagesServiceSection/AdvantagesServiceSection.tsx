import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './AdvantagesServiceSection.module.scss'

interface AdvantagesServiceSectionP {
	items: string[]
}

export const AdvantagesServiceSection = ({
	items,
}: AdvantagesServiceSectionP) => {
	return (
		<Section id='service-advantages' className={cls.Hero}>
			<Container className={cls.Container}>
				<ul className={cls.List}>
					{items.map((item: string, i: number) => {
						return (
							<li className={cls.Item} key={`qw${i}`}>
								<OkIcon className={cls.Icon} />
								<p className={cls.Text}>{item}</p>
							</li>
						)
					})}
				</ul>
			</Container>
		</Section>
	)
}
