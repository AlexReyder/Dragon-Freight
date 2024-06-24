import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import cls from './MarqueeF.module.scss'
export const MarqueeF = () => {
	return (
		<Marquee className={cls.Marquee} pauseOnHover={true}>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/1.png'
					alt='Наш партнер'
					width={80}
					height={60}
					className={cls.Partners}
				/>
			</div>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/2.png'
					alt='Наш партнер'
					width={267}
					height={60}
					className={cls.Partners}
				/>
			</div>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/3.png'
					alt='Наш партнер'
					width={172}
					height={60}
					className={cls.Partners}
				/>
			</div>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/4.png'
					alt='Наш партнер'
					width={205}
					height={60}
					className={cls.Partners}
				/>
			</div>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/5.png'
					alt='Наш партнер'
					width={213}
					height={60}
					className={cls.Partners}
				/>
			</div>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/6.png'
					alt='Наш партнер'
					width={58}
					height={60}
					className={cls.Partners}
				/>
			</div>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/7.png'
					alt='Наш партнер'
					width={69}
					height={60}
					className={cls.Partners}
				/>
			</div>
			<div className={cls.PartnersWrapper}>
				<Image
					src='/img/partners/8.jpg'
					alt='Наш партнер'
					width={188}
					height={60}
					className={cls.Partners}
				/>
			</div>
		</Marquee>
	)
}
