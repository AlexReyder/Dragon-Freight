import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const GuaranteeIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 43 48'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M22.0682 1.12247C21.7074 0.959175 21.2928 0.959175 20.9317 1.12247L1.7985 9.7813C1.26498 10.0227 0.946629 10.5743 1.00739 11.1519L2.23561 22.8243C3.22374 32.2151 8.85981 40.5067 17.2753 44.9498L20.8568 46.8409C21.2589 47.053 21.7411 47.053 22.1431 46.8409L25.7249 44.9498C34.1403 40.5067 39.7764 32.2151 40.7645 22.8243L41.9926 11.1519C42.0535 10.5743 41.7351 10.0227 41.2015 9.7813L22.0682 1.12247ZM4.95421 22.544L3.82772 11.8382L21.5 3.84056L39.1723 11.8382L38.0459 22.544C37.1518 31.0404 32.0525 38.5422 24.4386 42.5624L21.5 44.1136L18.5617 42.5624C10.9475 38.5422 5.84825 31.0404 4.95421 22.544ZM31.1902 19.1448C31.6885 18.5837 31.633 17.7289 31.0661 17.2355C30.4992 16.7422 29.6357 16.7972 29.1374 17.3584L19.9783 27.6724L15.2229 23.8119C14.6392 23.3381 13.7781 23.4226 13.2995 24.0003C12.8209 24.578 12.9061 25.4306 13.4897 25.9044L19.2663 30.5937C19.8357 31.0559 20.6729 30.9882 21.1591 30.4408L31.1902 19.1448Z'
				fill={fill}
				stroke={fill}
				stroke-width='2'
			/>
		</svg>
	)
}