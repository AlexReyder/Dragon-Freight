import { Section } from '@/shared/ui/Layout/Section/Section'
import Link from 'next/link'
import cls from './HeroSecondarySection.module.scss'

interface HeroSecondarySectionP {
	img: string
	title: string
	subtitle?: string
}

export const HeroSecondarySection = ({
	img,
	title,
	subtitle = 'Ваша заявка принята! В ближайшее время наш менеджер свяжется с Вами для уточнения заказа',
}: HeroSecondarySectionP) => {
	return (
		<Section id='hero-service' className={cls.Hero}>
			<div className={cls.Touch}>
				<h1 className={cls.Heading}>{title}</h1>
				<h2 className={cls.Subheading}>{subtitle}</h2>
				<div className={cls.ButtonContainer}>
					<Link href='/' className={cls.TelegramLink}>
						Вернуться на главную &nbsp;&nbsp; &rarr;
					</Link>
				</div>
			</div>
			<div className={cls.ImageContainer}>
				<img src={img} alt='' />
			</div>
		</Section>
	)
}
