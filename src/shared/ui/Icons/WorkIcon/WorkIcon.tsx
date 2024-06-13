import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const WorkIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 42 42'
		>
			<g clipPath='url(#clip0_20_61)'>
				<path
					d='M21.513 9.98725C20.8287 9.303 20.8287 8.197 21.513 7.51275L25.013 4.01275C25.6972 3.3285 26.8032 3.3285 27.4875 4.01275C28.1717 4.697 28.1717 5.803 27.4875 6.48725L23.9875 9.98725C23.6462 10.3285 23.1982 10.5 22.7502 10.5C22.3022 10.5 21.8542 10.3285 21.513 9.98725ZM7.51299 9.98725C7.85424 10.3285 8.30223 10.5 8.75024 10.5C9.19824 10.5 9.64623 10.3285 9.98748 9.98725C10.6717 9.303 10.6717 8.197 9.98748 7.51275L6.48748 4.01275C5.80323 3.3285 4.69723 3.3285 4.01298 4.01275C3.32873 4.697 3.32873 5.803 4.01298 6.48725L7.51299 9.98725ZM15.7502 8.75C16.718 8.75 17.5002 7.966 17.5002 7V1.75C17.5002 0.784 16.718 0 15.7502 0C14.7825 0 14.0002 0.784 14.0002 1.75V7C14.0002 7.966 14.7825 8.75 15.7502 8.75ZM37.529 9.163C36.633 7.9205 35.254 7.13825 33.7437 7.01575C32.216 6.88275 30.7477 7.43925 29.675 8.512L15.8762 22.358L15.5665 18.956C15.521 17.5787 14.9417 16.303 13.9337 15.3633C12.9275 14.4218 11.5677 13.9405 10.2412 13.9773C7.39748 14.0735 5.15923 16.464 5.25023 19.25V35.4497C5.25023 36.3843 4.88448 37.2627 4.22298 37.9242L3.13623 39.0127C2.45198 39.697 2.45198 40.8047 3.13623 41.489C3.47748 41.8302 3.92548 42 4.37348 42C4.82148 42 5.26948 41.8285 5.61073 41.4873L6.69748 40.3988C8.02048 39.0775 8.74849 37.3187 8.74849 35.4497V19.1922C8.71873 18.277 9.44148 17.5053 10.3567 17.4755C10.8345 17.4422 11.2212 17.619 11.545 17.92C11.8687 18.2227 12.0542 18.6322 12.0752 19.173L12.4585 23.4255C12.5687 24.6575 13.3597 25.683 14.5217 26.103C15.682 26.523 16.9472 26.2412 17.8205 25.3662L32.1512 10.9865C32.4942 10.6417 32.9562 10.4615 33.462 10.5052C33.9555 10.5455 34.3912 10.7958 34.6887 11.2088C35.1437 11.8405 35.0037 12.831 34.3702 13.4645L26.0577 21.777C25.4872 22.3475 25.3805 23.2348 25.8005 23.9225L30.5255 31.6978C32.0532 33.9885 31.7487 37.065 29.8027 39.0127C29.1185 39.697 29.1185 40.8048 29.8027 41.4873C30.487 42.1715 31.593 42.1715 32.2772 41.4873C35.3992 38.3635 35.8875 33.4303 33.4777 29.82L29.5052 23.2803L36.8447 15.939C38.6892 14.0962 38.9832 11.1825 37.529 9.163Z'
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id='clip0_20_61'>
					<rect width='42' height='42' fill={fill} />
				</clipPath>
			</defs>
		</svg>
	)
}
