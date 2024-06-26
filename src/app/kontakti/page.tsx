import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Metadata } from 'next'
import cls from './page.module.scss'

export const metadata: Metadata = {
	title: 'Контакты',
}

export default function ContactsCompany() {
	return (
		<main>
			<Header />
			<Container className={cls.Container}>
				<Headings
					title={
						<span>
							Готовы ответить на ваши вопросы&nbsp;
							<span style={{ color: 'var(--color-primary)' }}>
								в любое время
							</span>{' '}
						</span>
					}
					subtitle='КОНТАКТЫ'
					color='b'
					className={cls.Heading}
				/>
			</Container>
			<Footer className={cls.Footer} />
		</main>
	)
}
