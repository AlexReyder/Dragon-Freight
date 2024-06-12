import { Section } from '@/shared/ui/Layout/Section/Section'
import { PrinciplesSlider } from '@/shared/ui/Sliders/PrinciplesSlider'
import cls from './PrinciplesSection.module.scss'

export const PrinciplesSection = () => {
	return (
		<Section id='principles' className={cls.Section}>
			<PrinciplesSlider />

			<div className={cls.Overlay}>
				<video
					itemScope
					itemType='http://schema.org/VideoObject'
					className={cls.Video}
					autoPlay={true}
					preload='none'
					loop
					muted
				>
					<source src='/videos/hero.mp4' type='video/mp4' />
					<meta itemProp='name' content='Name of the video' />
					<meta itemProp='description' content='Description of the video...' />
					<meta itemProp='duration' content='PT1M33S' />
					<meta itemProp='thumbnail' content='my-video-thumbnail-path.jpg' />
				</video>
			</div>
		</Section>
	)
}
