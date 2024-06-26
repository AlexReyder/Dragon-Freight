import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const res = await fetch(`${process.env.DOMAIN}/api/news/get`, {
		cache: 'no-store',
	})
	const data = await res.json()

	const posts = data.map((el: any) => ({
		url: `http://dragonfreight.ru/${el.slug}`,
		lastModified: new Date().toISOString(),
		priority: 0.5,
	}))

	return [
		{
			url: 'http://dragonfreight.ru',
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: 'http://dragonfreight.ru/spasibo',
			lastModified: new Date(),
			priority: 0.2,
		},
		{
			url: 'http://dragonfreight.ru/kontakti',
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: 'http://dragonfreight.ru/o-kompanii',
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: 'http://dragonfreight.ru/services/autsorsing-ved',
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: 'http://dragonfreight.ru/services/avtoperevozki-gruzov-iz-kitaya',
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: 'http://dragonfreight.ru/services/aviaperevozki-gruzov-iz-kitaya',
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: 'http://dragonfreight.ru/services/morskaya-perevozka-gruzov-iz-kitaya',
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: 'http://dragonfreight.ru/services/tamozhennoe-soprovozhdenie',
			lastModified: new Date(),
			priority: 0.7,
		},
		{
			url: 'http://dragonfreight.ru/services/zhd-perevozki-gruzov-iz-kitaya',
			lastModified: new Date(),
			priority: 0.7,
		},
		...posts,
	]
}
