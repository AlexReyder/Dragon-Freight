import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://dragonfreight.ru/',
			priority: 1,
		},
		{
			url: 'https://dragonfreight.ru/kontakti',
			changeFrequency: 'weekly',
			priority: 0.8,
		},
	]
}
