import { motion } from 'framer-motion'
import cls from './HeaderCommunicate.module.scss'
import { perspective } from './anim'

const links = [
	{
		title: '',

		href: '/',
	},

	{
		title: '',

		href: '/',
	},

	{
		title: '',

		href: '/',
	},
]

export const CommunicateNav = () => {
	return (
		<div className={cls.nav}>
			<div className={cls.body}>
				{links.map((link, i) => {
					const { title, href } = link

					return (
						<div key={`b_${i}`} className={cls.linkContainer}>
							<motion.div
								href={href}
								custom={i}
								variants={perspective}
								initial='initial'
								animate='enter'
								exit='exit'
							>
								<a>{title}</a>
							</motion.div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
