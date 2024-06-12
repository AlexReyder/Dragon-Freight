'use client'
import { Service } from '@/features/Service'
import { servicesData } from '@/shared/data/services'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import cls from './ServicesSection.module.scss'

export const ServicesSection = () => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	// useEffect(() => {
	// 	const lenis = new Lenis()

	// 	function raf(time) {
	// 		lenis.raf(time)
	// 		requestAnimationFrame(raf)
	// 	}

	// 	requestAnimationFrame(raf)
	// })
	return (
		<Section id='services'>
			<Container>
				<Headings
					title={
						<span>
							Оказываем весь комплекс услуг по транспортировке{' '}
							<span className={cls.Colored}>грузов из Китая</span>
						</span>
					}
					subtitle='Услуги'
					color='b'
				/>
				<main ref={container} className={cls.main}>
					{servicesData.map((project, i) => {
						const targetScale = 1 - (servicesData.length - i) * 0.05
						return (
							<Service
								key={`p_${i}`}
								i={i}
								{...project}
								progress={scrollYProgress}
								range={[i * (1 / 6), 1]}
								targetScale={targetScale}
							/>
						)
					})}
				</main>
			</Container>
		</Section>
	)
}
