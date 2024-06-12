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
					<Image src='/img/logo/D.svg' alt='' fill />
				</div>
				<div className={cls.Follow}>
					<h2 className={cls.Heading}>
						<span className={cls.Colored}>Telegram </span>
						<span>канал</span>
					</h2>
					<h3 className={cls.Subheading}>
						Подписывайтесь на наш телеграм-канал и будьте в курсе всех
						актуальных цен на наши услуги!
					</h3>
					<div style={{ display: 'flex' }}>
						<Link
							href='https://t.me/dragonfreight'
							target='_blank'
							className={cls.FollowButton}
						>
							<span>Подписаться </span>
							<span>&rarr;</span>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	)
}
