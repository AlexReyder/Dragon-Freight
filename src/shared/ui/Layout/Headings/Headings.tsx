import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './Headings.module.scss'
interface HeadingsProps {
	className?: string
	title: string | ReactNode
	subtitle?: string | ReactNode
	text?: string
	color?: 'b' | 'w'
}

export const Headings = ({
	className,
	title,
	subtitle,
	text = '',
	color = 'b',
}: HeadingsProps) => {
	return (
		<div className={classNames(cls.Headings, {}, [className!])}>
			<h3 className={cls.Subheading}>{subtitle}</h3>
			<h2 className={`${cls.Heading} ${color === 'w' ? cls.White : cls.Black}`}>
				{title}
			</h2>
			<p className={cls.Text}>{text}</p>
		</div>
	)
}
