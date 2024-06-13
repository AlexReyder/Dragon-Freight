import { AboutSection } from '@/sections/AboutSection'
import { CTASection } from '@/sections/CTASection/CTASection'
import { HeroSection } from '@/sections/HeroSection/HeroSection'
import { MSProperties } from '@/sections/MSProperties'
import { PrinciplesSection } from '@/sections/PrinciplesSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { TelegramSection } from '@/sections/TelegramSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<ServicesSection />
			<CTASection
				title='Быстрый расчет стоимости доставки'
				subtitle='Оставить заявку'
				text='Оставьте номер телефона. Наш менеджер перезвонит и подробно ответит на Ваши вопросы.'
				bg='/img/cta/1.jpg'
			/>
			<TelegramSection />
			<PrinciplesSection />
			<AboutSection />
			<MSProperties />

			<CTASection
				title='Быстрый расчет стоимости доставки'
				subtitle='Оставить заявку'
				text='Оставьте номер телефона. Наш специалист перезвонит и подробно ответит на Ваши вопросы.'
				bg='/img/cta/1.jpg'
			/>
			<Footer />
		</main>
	)
}
