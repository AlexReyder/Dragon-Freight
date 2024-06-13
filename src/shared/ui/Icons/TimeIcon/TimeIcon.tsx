import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const TimeIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 46 46'
		>
			<path
				d='M23 0C10.3185 0 0 10.3185 0 23C0 35.6815 10.3185 46 23 46C35.6815 46 46 35.6815 46 23C46 10.3185 35.6815 0 23 0ZM23 41.5C12.799 41.5 4.5 33.201 4.5 23C4.5 12.799 12.799 4.5 23 4.5C33.201 4.5 41.5 12.799 41.5 23C41.5 33.201 33.201 41.5 23 41.5Z'
				fill={fill}
			/>
			<path
				d='M25.25 7.75H20.75V23.842L28.0525 32.227L31.447 29.2739L25.2495 22.1589L25.25 7.75Z'
				fill={fill}
			/>
		</svg>
	)
}
