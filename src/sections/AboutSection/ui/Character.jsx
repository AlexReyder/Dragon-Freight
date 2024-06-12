import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import cls from './AboutSection.module.scss'

export default function Paragraph({ paragraph }) {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start 0.9', 'start 0.25'],
	})

	const words = paragraph.split(' ')
	return (
		<p ref={container} className={cls.paragraph} key={'asd2314s'}>
			{words.map((word, i) => {
				const start = i / words.length
				const end = start + 1 / words.length

				return (
					<Word
						key={`ppaaaprg${i}`}
						progress={scrollYProgress}
						range={[start, end]}
					>
						{word}
					</Word>
				)
			})}
		</p>
	)
}

const Word = ({ children, progress, range }) => {
	const amount = range[1] - range[0]
	const step = amount / children.length

	return (
		<span
			className={`${cls.word} ${
				children === 'Полимерный' ||
				children === 'микроцемент' ||
				children === '«Симтер»'
					? cls.mark
					: ''
			}`}
		>
			{children.split('').map((char, i) => {
				const start = range[0] + i * step
				const end = range[0] + (i + 1) * step
				return (
					<Char key={`cthf_${i}`} progress={progress} range={[start, end]}>
						{char}
					</Char>
				)
			})}
		</span>
	)
}

const Char = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1])
	return (
		<span>
			<span className={cls.shadow}>{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	)
}
