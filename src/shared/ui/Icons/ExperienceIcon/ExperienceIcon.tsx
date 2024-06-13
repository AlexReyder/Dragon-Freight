import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const ExperienceIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 42 42'
		>
			<g clipPath='url(#clip0_20_55)'>
				<path
					d='M13.125 22.75C11.5675 22.75 10.0449 22.2881 8.74988 21.4228C7.45485 20.5575 6.44549 19.3276 5.84945 17.8886C5.25341 16.4497 5.09746 14.8663 5.40132 13.3387C5.70517 11.8111 6.4552 10.4079 7.55653 9.30654C8.65787 8.2052 10.0611 7.45518 11.5887 7.15132C13.1163 6.84746 14.6997 7.00341 16.1386 7.59945C17.5776 8.19549 18.8075 9.20485 19.6728 10.4999C20.5381 11.7949 21 13.3175 21 14.875C20.9977 16.9629 20.1673 18.9646 18.6909 20.4409C17.2146 21.9173 15.2129 22.7477 13.125 22.75ZM13.125 10.5C12.2597 10.5 11.4138 10.7566 10.6944 11.2373C9.97492 11.7181 9.41416 12.4013 9.08303 13.2008C8.75189 14.0002 8.66525 14.8799 8.83406 15.7285C9.00287 16.5772 9.41955 17.3567 10.0314 17.9686C10.6433 18.5805 11.4228 18.9971 12.2715 19.1659C13.1201 19.3347 13.9998 19.2481 14.7992 18.917C15.5987 18.5858 16.2819 18.0251 16.7627 17.3056C17.2434 16.5862 17.5 15.7403 17.5 14.875C17.5 13.7147 17.0391 12.6019 16.2186 11.7814C15.3981 10.9609 14.2853 10.5 13.125 10.5ZM26.25 40.25V39.375C26.25 35.894 24.8672 32.5556 22.4058 30.0942C19.9444 27.6328 16.606 26.25 13.125 26.25C9.64403 26.25 6.30564 27.6328 3.84422 30.0942C1.38281 32.5556 0 35.894 0 39.375L0 40.25C0 40.7141 0.184374 41.1593 0.512563 41.4874C0.840752 41.8156 1.28587 42 1.75 42C2.21413 42 2.65925 41.8156 2.98744 41.4874C3.31563 41.1593 3.5 40.7141 3.5 40.25V39.375C3.5 36.8223 4.51406 34.3741 6.3191 32.5691C8.12414 30.7641 10.5723 29.75 13.125 29.75C15.6777 29.75 18.1259 30.7641 19.9309 32.5691C21.7359 34.3741 22.75 36.8223 22.75 39.375V40.25C22.75 40.7141 22.9344 41.1593 23.2626 41.4874C23.5908 41.8156 24.0359 42 24.5 42C24.9641 42 25.4092 41.8156 25.7374 41.4874C26.0656 41.1593 26.25 40.7141 26.25 40.25ZM42 31.5C41.9999 29.1352 41.3154 26.821 40.029 24.8366C38.7426 22.8523 36.9093 21.2828 34.7505 20.3174C32.5917 19.3521 30.1996 19.0323 27.8631 19.3965C25.5265 19.7608 23.3453 20.7936 21.5828 22.3703C21.4091 22.5229 21.2674 22.7083 21.1658 22.916C21.0643 23.1237 21.0049 23.3494 20.991 23.5802C20.9772 23.811 21.0093 24.0422 21.0853 24.2605C21.1614 24.4788 21.2799 24.6799 21.4341 24.8521C21.5883 25.0244 21.7751 25.1643 21.9837 25.264C22.1923 25.3636 22.4186 25.4209 22.6495 25.4326C22.8804 25.4443 23.1113 25.4101 23.3289 25.332C23.5465 25.254 23.7465 25.1335 23.9172 24.9778C25.1763 23.8518 26.7343 23.1144 28.4032 22.8544C30.0721 22.5944 31.7806 22.823 33.3225 23.5127C34.8643 24.2023 36.1736 25.3234 37.0924 26.7407C38.0111 28.158 38.5 29.811 38.5 31.5C38.5 31.9641 38.6844 32.4093 39.0126 32.7374C39.3408 33.0656 39.7859 33.25 40.25 33.25C40.7141 33.25 41.1592 33.0656 41.4874 32.7374C41.8156 32.4093 42 31.9641 42 31.5ZM30.625 15.75C29.0675 15.75 27.5449 15.2881 26.2499 14.4228C24.9548 13.5575 23.9455 12.3276 23.3494 10.8886C22.7534 9.44967 22.5975 7.86627 22.9013 6.33867C23.2052 4.81107 23.9552 3.40788 25.0565 2.30654C26.1579 1.2052 27.5611 0.455178 29.0887 0.151319C30.6163 -0.152539 32.1997 0.00341213 33.6386 0.599452C35.0776 1.19549 36.3075 2.20485 37.1728 3.49989C38.0381 4.79493 38.5 6.31748 38.5 7.875C38.4977 9.96287 37.6673 11.9646 36.1909 13.4409C34.7146 14.9173 32.7129 15.7477 30.625 15.75ZM30.625 3.5C29.7597 3.5 28.9138 3.75659 28.1944 4.23732C27.4749 4.71805 26.9142 5.40134 26.583 6.20076C26.2519 7.00019 26.1653 7.87986 26.3341 8.72852C26.5029 9.57719 26.9196 10.3567 27.5314 10.9686C28.1433 11.5805 28.9228 11.9971 29.7715 12.1659C30.6201 12.3347 31.4998 12.2481 32.2992 11.917C33.0987 11.5858 33.7819 11.0251 34.2627 10.3056C34.7434 9.58616 35 8.7403 35 7.875C35 6.71468 34.5391 5.60188 33.7186 4.78141C32.8981 3.96094 31.7853 3.5 30.625 3.5Z'
					fill={fill}
				/>
			</g>
			<defs>
				<clipPath id='clip0_20_55'>
					<rect width='42' height='42' fill={fill} />
				</clipPath>
			</defs>
		</svg>
	)
}
