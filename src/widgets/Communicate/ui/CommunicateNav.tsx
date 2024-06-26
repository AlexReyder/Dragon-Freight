import { motion } from 'framer-motion'
import cls from './HeaderCommunicate.module.scss'
import { perspective } from './anim'

const links = [
	{
		title: '+7(993) 590-66-51',

		href: 'tel:+79935906651',
	},

	{
		title: 'info@dragonfreight.ru',

		href: 'mailto:info@dragonfreight.ru',
	},

	{
		title: 'WhatsApp',

		href: 'https://wa.me/79935906651?text=',
	},
	{
		title: 'Telegram',

		href: 'https://t.me/dragonfreight',
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
								custom={i}
								variants={perspective}
								initial='initial'
								animate='enter'
								exit='exit'
							>
								<a href={href}>{title}</a>
							</motion.div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
