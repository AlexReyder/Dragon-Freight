import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const ArrowPrimaryBtnIcon: FC<Icons> = ({
	className,
	fill = 'none',
}: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			width='34'
			height='16'
			viewBox='0 0 34 16'
		>
			<path
				d='M32.9855 8.7071C33.376 8.31658 33.376 7.68342 32.9855 7.29289L26.6215 0.92893C26.231 0.538406 25.5978 0.538406 25.2073 0.92893C24.8168 1.31945 24.8168 1.95262 25.2073 2.34314L30.8642 8L25.2073 13.6569C24.8168 14.0474 24.8168 14.6805 25.2073 15.0711C25.5978 15.4616 26.231 15.4616 26.6215 15.0711L32.9855 8.7071ZM0.171875 9L32.2784 9L32.2784 7L0.171875 7L0.171875 9Z'
				fill='#222222'
			/>
		</svg>
	)
}
