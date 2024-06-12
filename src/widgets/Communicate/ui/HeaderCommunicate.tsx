import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { CommunicateButton } from './CommunicateButton'
import { CommunicateNav } from './CommunicateNav'
import cls from './HeaderCommunicate.module.scss'

const menu = {
	open: {
		width: '480px',

		height: '650px',

		top: '-25px',

		right: '-25px',

		transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
	},

	closed: {
		width: '0',

		height: '0',

		top: '0px',

		right: '0px',

		transition: {
			duration: 0.75,
			delay: 0.35,
			type: 'tween',
			ease: [0.76, 0, 0.24, 1],
		},
	},
}

export const HeaderCommunicate = () => {
	const [isActive, setIsActive] = useState<boolean>(false)
	return (
		<div className={cls.header}>
			<motion.div
				className={cls.menu}
				variants={menu}
				animate={isActive ? 'open' : 'closed'}
				initial='closed'
			>
				<AnimatePresence>{isActive && <CommunicateNav />}</AnimatePresence>
			</motion.div>

			<CommunicateButton
				isActive={isActive}
				toggleMenu={() => {
					setIsActive(!isActive)
				}}
			/>
		</div>
	)
}

// {/* <span className={cls.Title}>+7(903) 500-66-51</span> */}
