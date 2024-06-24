'use client'
import { FactsList } from '@/features/FactsList/FactsList'
import { MarqueeF } from '@/features/MarqueeF/MarqueeF'
import { Testimonial } from '@/features/Testimonial/Testimonial'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Link from 'next/link'
import cls from './AboutSection.module.scss'
import Character from './Character'

const phrase =
	'Дрэгон Фрайт - это надежные международные грузоперевозки из Китая. За время работы накопили огромный опыт и в мельчайших подробностях знаем как организовать каждый этап поставки. Все заботы от поиска поставщика до передачи документов в вашу бухгалтерию возьмем на себя. С нами вы можете быть уверены, что сделка пройдет идеально, и груз приедет в целости и сохранности.'

export const AboutSection = () => {
	// const words = phrase.split(' ')

	return (
		<Section id='about' className={cls.Section}>
			<Container className={cls.Container}>
				<h3 className={cls.Subheading}>О компании</h3>
				<Character paragraph={phrase} />
				<Link href='/o-kompanii' className={cls.TelegramLink}>
					Подробнее о нас &nbsp;&nbsp; &rarr;
				</Link>
				<Testimonial />
				<FactsList />
				<MarqueeF />
			</Container>
		</Section>
	)
}
