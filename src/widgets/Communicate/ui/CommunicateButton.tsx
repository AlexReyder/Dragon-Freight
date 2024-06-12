import { motion } from 'framer-motion'
import cls from './HeaderCommunicate.module.scss'

interface CommunicateButtonProps {
	className?: string
	isActive: boolean
	toggleMenu: () => void
}

export const CommunicateButton = ({
	className,
	isActive,
	toggleMenu,
}: CommunicateButtonProps) => {
	return (
		<div className={cls.button}>
			<motion.div
				className={cls.slider}
				animate={{ top: isActive ? '-100%' : '0%' }}
				transition={{ duration: 0.5, type: 'tween', ease: [0.76, 0, 0.24, 1] }}
			>
				<div
					className={cls.el}
					onClick={() => {
						toggleMenu()
					}}
				>
					<PerspectiveText label='+79035006651' />
				</div>

				<div
					className={cls.el}
					onClick={() => {
						toggleMenu()
					}}
				>
					<PerspectiveText label='Close' />
				</div>
			</motion.div>
		</div>
	)
}

function PerspectiveText({ label }: any) {
	return (
		<div className={cls.perspectiveText}>
			<p>{label}</p>

			<p>{label}</p>
		</div>
	)
}
