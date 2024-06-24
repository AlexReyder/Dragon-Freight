import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ReactNode } from 'react'
import cls from './StepServiceSection.module.scss'

interface StepServiceSectionSectionP {
	title: string
	subtitle?: string
	children: ReactNode
}

export const StepServiceSectionSection = ({
	title,
	subtitle = '',
	children,
}: StepServiceSectionSectionP) => {
	return (
		<Section className={cls.Hero}>
			<Container className={cls.Container}>
				<Headings title={title} subtitle='' />
				<p className={cls.Title}>{subtitle}</p>
				<div>{children}</div>
			</Container>
		</Section>
	)
}
