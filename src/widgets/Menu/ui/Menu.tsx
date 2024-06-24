'use client'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'
import Link from 'next/link'
import { useState } from 'react'
import './Menu.scss'

interface MenuProps {
	className?: string
}

export const Menu = ({ className }: MenuProps) => {
	const [menu, toggleMenu] = useState(false)

	const onToggle = () => {
		// if (!menu) {
		// 	// document.body.style.overflow = 'hidden'
		// } else {
		// 	// document.body.style.overflow = ''
		// }
		toggleMenu(!menu)
	}

	return (
		<div className={`navigation ${menu ? 'nav-active' : ''} f-c ${className}`}>
			<button className='nav-but-wrap' onClick={onToggle}>
				<span className='nav-but-title'>Меню</span>
				<div className='menu-icon hover-target'>
					<span className='menu-icon__line menu-icon__line-left'></span>
					<span className='menu-icon__line'></span>
					<span className='menu-icon__line menu-icon__line-right'></span>
				</div>
			</button>

			<nav className='nav'>
				<div className='nav__content'>
					<ul className='nav__list'>
						<li className='nav__list-item'>
							<Link href='/services/autsorsing-ved' onClick={onToggle}>
								Аутсорсинг ВЭД
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link
								href='/services/aviaperevozki-gruzov-iz-kitaya'
								onClick={onToggle}
							>
								Авиадоставка
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link
								href='/services/avtoperevozki-gruzov-iz-kitaya'
								onClick={onToggle}
							>
								Автодоставка
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link
								href='/services/zhd-perevozki-gruzov-iz-kitaya'
								onClick={onToggle}
							>
								Ж/Д Доставка
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link
								href='/services/morskaya-perevozka-gruzov-iz-kitaya'
								onClick={onToggle}
							>
								Морская доставка
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link
								href='/services/tamozhennoe-soprovozhdenie'
								onClick={onToggle}
							>
								Таможенное оформление
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/o-kompanii' onClick={onToggle}>
								О компании
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/#contacts' onClick={onToggle}>
								Контакты
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='tel:+79035006651'>+7(903) 500-66-51</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='mailto:info@dragonfreight.ru'>
								info@dragonfreight.ru
							</Link>
						</li>
						<li className='nav__list-item nav__list-item--messangers'>
							<MessangerLink
								to='https://wa.me/79035006651?text='
								className='f-c'
								icon={<WhatsAppIcon className='nav__list-icon' />}
							/>
							<MessangerLink
								to='https://t.me/dragonfreight'
								className='f-c'
								icon={<TelegramIcon className='nav__list-icon' />}
							/>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
