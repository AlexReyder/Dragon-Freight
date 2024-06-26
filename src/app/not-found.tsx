import { HeroSecondarySection } from '@/sections/HeroSecondarySection/HeroSecondarySection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function Custom404() {
	return (
		<main>
			<main>
				<Header />
				<HeroSecondarySection
					title='Ошибка 404'
					subtitle='Страница не найдена.'
					img='/img/hero/china-map.svg'
				/>
				<Footer />
			</main>
		</main>
	)
}
