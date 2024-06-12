import { Container } from '@/shared/ui/Layout/Container/Container'
import Link from 'next/link'
import cls from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={cls.Footer} id='contacts'>
			<Container className={cls.Wrapper}>
				<div className={cls.Contact}>
					<div className={`${cls.Contacts__entity} ${cls.Entity_1}`}>
						<p className={cls.Title}>Электронная почта</p>
						<a
							href='mailto:info@dragonfreight.ru'
							className={`${cls.Email} link`}
						>
							info@dragonfreight.ru
						</a>
					</div>
					<div className={`${cls.Contacts__entity} ${cls.Entity_2}`}>
						<p className={cls.Title}>Номер телефона</p>
						<a href='tel:+79035006651' className={`${cls.Email} link`}>
							+7(903) 500-66-51
						</a>
					</div>
					<div className={`${cls.Contacts__entity} ${cls.Entity_3}`}>
						<p className={cls.Title}>Мессенджеры</p>
						<a
							href='https://wa.me/79035006651?text='
							className={`${cls.Messanger} link`}
							target='_blank'
						>
							Whatsapp
						</a>
						<a
							href='https://t.me/79035006651'
							className={`${cls.Messanger} link`}
							target='_blank'
						>
							Telegram
						</a>
					</div>
				</div>
				<div className={cls.Office}>
					<div className={`${cls.Contacts__entity} ${cls.Entity_4}`}>
						<p className={cls.Title}>Офис в Москве</p>
						<p className={`${cls.Address}`}>ул. Москворечье, д. 49, кв. 12</p>
					</div>
				</div>
				<div className={cls.Requisites}>
					<div className={`${cls.Contacts__entity} ${cls.Entity_5}`}>
						<p className={cls.Title}>Реквизиты</p>
						<p className={cls.Business}>ООО «ДРЭГОН ФРАЙТ»</p>
						<p className={cls.Business}>ИНН 9724193120</p>
					</div>
				</div>
			</Container>
			<p className={cls.Copyright}>2024 © ООО «ДРЭГОН ФРАЙТ»</p>
			<Link href='#' className={cls.Top}>
				<img
					src='img/icons/top.svg'
					alt='Подняться наверх'
					width={19}
					height={28}
				/>
			</Link>
		</footer>
	)
}
