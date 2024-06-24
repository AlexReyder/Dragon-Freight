import { QuoteIcon } from '@/shared/ui/Icons/QuoteIcon/QuoteIcon'
import Image from 'next/image'
import cls from './Testimonial.module.scss'
export const Testimonial = () => {
	return (
		<div className={cls.Wrapper}>
			<article className={cls.Article}>
				<p className={cls.Text}>
					«Как основатель и руководитель компании я беру на себя ответственность
					за успешный результат сделки, фиксированную стоимость наших услуг и
					компетентность сотрудников на каждом этапе доставки».
				</p>
				<div>
					<h3 className={cls.Author}>— Раздымалин Станислав Александрович</h3>
					<p className={cls.Description}>
						Генеральный директор ООО «Дрэгон Фрайт»
					</p>
				</div>
				<QuoteIcon className={cls.Quote} />
			</article>
			<div className={cls.MainImageWrapper}>
				<Image
					src='/img/testimonial/stanislav.jpg'
					alt='Генеральный директор ООО «Дрэгон Фрайт»'
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className={cls.Workers}>
				<div className={cls.WorkersImages}>
					<div className={cls.MainImageWrapper}>
						<Image
							src='/img/testimonial/dmitry.jpg'
							alt='Старший менеджер по ВЭД'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<h3 className={cls.Author}>Дмитрий</h3>
					<p className={cls.Description}>Старший менеджер по ВЭД</p>
				</div>
				<div className={cls.WorkersImages}>
					<div className={cls.MainImageWrapper}>
						<Image
							src='/img/testimonial/maria.jpg'
							alt='Менеджер по ВЭД'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</div>
					<h3 className={cls.Author}>Мария</h3>
					<p className={cls.Description}>Менеджер по ВЭД</p>
				</div>
			</div>
		</div>
	)
}
