import { HeroSecondarySection } from '@/sections/HeroSecondarySection/HeroSecondarySection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function Spasibo() {
	return (
		<main>
			<Header />
			<HeroSecondarySection
				title='Спасибо за заявку!'
				img='/img/hero/china-map.svg'
			/>
			<Footer />
		</main>
	)
}
