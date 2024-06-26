import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		template: '%s | Dragon Freight',
		default: 'Доставка грузов из Китая по всей России | Dragon Freight',
	},
	description:
		'Dragon Freight - логистическая компания, основным направлением работы которой являются грузоперевозки из Китая в Россию. Мы занимаемся доставкой и таможенным оформлением грузов, предоставляем услуги аутсорсинга ВЭД. Организуем перевозку груза воздушным, морским и наземным транспортом. ',
	openGraph: {
		title: 'Доставка грузов из Китая по всей России | Dragon Freight',
		description:
			'Организуем перевозку груза воздушным, морским и наземным транспортом.',
		url: 'http://dragonfreight.ru/',
		siteName: 'Dragon Freight',
		images: [
			{
				url: 'http://dragonfreight.ru/og.png', // Must be an absolute URL
				width: 800,
				height: 600,
			},
			{
				url: 'http://dragonfreight.ru/og-alt.png', // Must be an absolute URL
				width: 1800,
				height: 1600,
				alt: 'Доставка грузов из Китая по всей России',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	icons: {
		icon: '/icon.png',
		shortcut: '/shortcut-icon.png',
		apple: '/apple-icon.png',
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/apple-touch-icon-precomposed.png',
		},
	},
}

export const viewport: Viewport = {
	themeColor: 'light',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
