import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	metadataBase: new URL(`https://dragonfreight.ru`),
	title: {
		template: '%s | Dragon Freight',
		default: 'Доставка грузов из Китая по всей России | Dragon Freight',
	},
	description:
		'Dragon Freight - логистическая компания, основным направлением работы которой являются грузоперевозки из Китая в Россию. Организуем перевозку груза воздушным, морским и наземным транспортом. ',
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
	alternates: {
		canonical: './',
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
			<body className={inter.className}>
				{children}
				<Script id='metrika-counter' strategy='afterInteractive'>
					{`
	<!-- Yandex.Metrika counter -->
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(97753412, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
<!-- /Yandex.Metrika counter -->
	`}
				</Script>
			</body>
		</html>
	)
}
