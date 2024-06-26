import { FactsList } from '@/features/FactsList/FactsList'
import { MarqueeF } from '@/features/MarqueeF/MarqueeF'
import { Testimonial } from '@/features/Testimonial/Testimonial'
import { CTASection } from '@/sections/CTASection/CTASection'
import { PrinciplesSection } from '@/sections/PrinciplesSection'
import { AboutServiceSection } from '@/sections/SERVICES/AboutServiceSection/AboutServiceSection'
import { AdvantagesServiceSection } from '@/sections/SERVICES/AdvantagesServiceSection/AdvantagesServiceSection'
import { HeroServiceSection } from '@/sections/SERVICES/HeroServiceSection/HeroServiceSection'
import { StepServiceSectionSection } from '@/sections/SERVICES/StepServiceSection/StepServiceSection'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Metadata } from 'next'
import cls from './page.module.scss'

export const metadata: Metadata = {
	title: 'О компании',
}

export default function AboutCompany() {
	return (
		<main>
			<Header />
			<HeroServiceSection
				img='/img/hero/china-map.svg'
				title='О компании DRAGON FREIGHT'
				subtitle=''
			/>
			<AdvantagesServiceSection
				items={[
					'Доставка грузов из Китая',
					'Аутсорсинг ВЭД',
					'Таможенное сопровождение',
				]}
			/>
			<AboutServiceSection
				title=''
				subtitle=''
				text={[
					'ООО «Дрэгон Фрайт» — логистическая компания, основным направлением работы которой являются грузоперевозки из Китая в Россию. Мы занимаемся доставкой и таможенным оформлением грузов, предоставляем услуги аутсорсинга ВЭД. Организуем перевозку груза воздушным, морским и наземным транспортом. ',
					'Работаем с юридическими лицами разного масштаба: от небольших селлеров на маркетплейсах до крупных производственных и торговых компаний. Доставляем грузы любой категории, включая опасные, негабаритные и с температурным режимом.',
					'В нашем коллективе работают только специалисты по ВЭД. Индивидуальный опыт каждого сотрудника от 10 лет. Можем вести переговоры на русском, английском и китайском языках.',
				]}
				img='/img/logo/D.svg'
				alt='Аутсорсинг ВЭД'
			/>
			<FactsList />
			<PrinciplesSection />

			<StepServiceSectionSection title='Возьмем на себя ответственность за перевозку вашего груза из Китая'>
				<p className={cls.Text}>
					Дрэгон Фрайт - это надежные международные грузоперевозки из Китая. За
					время работы накопили огромный опыт и в мельчайших подробностях знаем
					как организовать каждый этап поставки.
				</p>
				<p className={cls.Text}>
					Все заботы от поиска поставщика до передачи документов в вашу
					бухгалтерию возьмем на себя. С нами вы можете быть уверены, что сделка
					пройдет идеально, и груз приедет в целости и сохранности.
				</p>
			</StepServiceSectionSection>
			<Container>
				<Testimonial />
				<MarqueeF />
			</Container>

			<CTASection
				title='Доверьте доставку груза из Китая профессионалам'
				subtitle='Оставить заявку'
				text='Оставьте номер телефона. Наш сотрудник подробно ответит на все ваши вопросы и рассчитает стоимость.'
			/>
			<Footer />
		</main>
	)
}
