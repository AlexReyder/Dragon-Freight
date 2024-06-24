import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Image from 'next/image'
import cls from './AboutServiceSection.module.scss'

interface AboutServiceSectionP {
	text: string[]
	title?: string
	subtitle: string
	img: string
	alt: string
}

export const AboutServiceSection = ({
	title = 'Об услуге',
	subtitle,
	text,
	img,
	alt,
}: AboutServiceSectionP) => {
	return (
		<Section id='#hero' className={cls.Hero}>
			<Container>
				<Headings title={title} subtitle={subtitle} />
				<div className={cls.Container}>
					<div className={cls.Image}>
						<Image src={img} alt={alt} fill />
					</div>
					<article className={cls.Article}>
						{text.map((item: string, i: number) => {
							return (
								<p className={cls.Text} key={`qw${i}`}>
									{item}
								</p>
							)
						})}
					</article>
				</div>
			</Container>
		</Section>
	)
}
