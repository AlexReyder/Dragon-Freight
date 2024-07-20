import { AboutSection } from '@/sections/AboutSection'
import { BetSection } from '@/sections/BetSection/BetSection'
import { CTASection } from '@/sections/CTASection/CTASection'
import { HeroSection } from '@/sections/HeroSection/HeroSection'
import { MSProperties } from '@/sections/MSProperties'
import { PostSection } from '@/sections/PostSection/PostSection'
import { PrinciplesSection } from '@/sections/PrinciplesSection'
import { AdvantagesServiceSection } from '@/sections/SERVICES/AdvantagesServiceSection/AdvantagesServiceSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { TelegramSection } from '@/sections/TelegramSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<AdvantagesServiceSection
				items={[
					'Работаем с юридическими лицами: от продавцов на маркетплейсах до крупных предприятий',
					'Доставим любую категорию товаров в полном объеме и целостности ',
					'Проведем груз через таможню. Правильно оформим все документы',
					'Составим договор на оказание услуг. Зафиксируем сроки доставки и гарантии',
				]}
			/>
			<ServicesSection />
			<BetSection />
			<CTASection
				title={
					<span>
						Быстрый расчет
						<br />
						стоимости доставки
					</span>
				}
				subtitle='Оставить заявку'
				text='Оставьте номер телефона. Наш менеджер перезвонит и подробно ответит на Ваши вопросы.'
			/>
			<TelegramSection />
			<PrinciplesSection />
			<AboutSection />
			<MSProperties />
			<PostSection />
			<CTASection
				title='Быстрый расчет стоимости доставки'
				subtitle='Оставить заявку'
				text='Оставьте номер телефона. Наш специалист перезвонит и подробно ответит на Ваши вопросы.'
			/>
			<Footer />
		</main>
	)
}
