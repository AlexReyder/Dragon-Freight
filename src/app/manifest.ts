import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Доставка грузов из Китая по всей России | Dragon Freight',
		short_name: 'Dragon Freight',
		description:
			'Dragon Freight - логистическая компания, основным направлением работы которой являются грузоперевозки из Китая в Россию. Организуем перевозку груза воздушным, морским и наземным транспортом.',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	}
}
