import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
	className?: string
	text: string | ReactNode
	theme?: 'White' | 'Dark'
	type?: 'button' | 'submit'
	onClick?: any
	value?: string
}

export const PrimaryButton = ({
	className,
	text,
	theme,
	type = 'button',
	value,
	onClick,
}: PrimaryButtonProps) => {
	return (
		<button
			type={type}
			className={classNames(cls.PrimaryButton, {}, [className!, cls[theme!]])}
			value={value}
			onClick={onClick}
		>
			<span>{text}</span>
			{/* <div className={cls.IconContainer}>
				<ArrowPrimaryBtnIcon />
			</div> */}
		</button>
	)
}
