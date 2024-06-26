import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Image from 'next/image'
import Link from 'next/link'
import cls from './TelegramSection.module.scss'
export const TelegramSection = () => {
	return (
		<Section id='follow-telegram' className={cls.Section}>
			<Container className={cls.Container}>
				<div className={cls.D}>
					{/* <LogoD className='S' /> */}
					<Image
						src='/img/logo/D.svg'
						alt='Актуальные ставки на грузоперевозки'
						fill
					/>
				</div>
				<div className={cls.Follow}>
					<h2 className={cls.Heading}>
						<span className={cls.Colored}>Telegram </span>
						<span>канал</span>
					</h2>
					<h3 className={cls.Subheading}>
						Подпишитесь на наш telegram-канал и будьте в курсе обновления цен на
						наши услуги. Ставки постоянно меняются.
					</h3>
					<div className={cls.ActionWrapper}>
						<Link
							href='https://t.me/dragonfreight'
							target='_blank'
							className={cls.FollowButton}
						>
							<span>Подписаться на канал </span>
							<span>&rarr;</span>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	)
}
