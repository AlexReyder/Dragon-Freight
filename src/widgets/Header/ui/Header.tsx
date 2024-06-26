'use client'
import { Logo } from '@/shared/ui/Icons/Logo/Logo'
import { HeaderCommunicate } from '@/widgets/Communicate'
import { Menu } from '@/widgets/Menu'
import Link from 'next/link'
import cls from './Header.module.scss'

export const Header = () => {
	return (
		<header className={cls.Header}>
			<Link href='/' className={cls.LogoBox} aria-label='Dragon Freight'>
				<Logo />
			</Link>

			<div className={cls.Communicate}>
				{/* <div className={cls.Social}>
					<MessangerLink
						icon={<WhatsAppIcon className={cls.Icon} />}
						to='https://wa.me/79950322214?text='
					/>
					<MessangerLink
						icon={<TelegramIcon className={cls.Icon} />}
						to='https://t.me/Simter1'
					/>
					<p className={cls.More}>(Звоните и пишите)</p>
				</div> */}
				<HeaderCommunicate />
				<Menu className={cls.Hamburger} />
			</div>
		</header>
	)
}
