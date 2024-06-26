import { Container } from '@/shared/ui/Layout/Container/Container'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { Metadata, ResolvingMetadata } from 'next'
import './page.css'

type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	// read route params
	const slug = params.slug

	// fetch data
	const product = await fetch(
		`http://localhost:3000/api/news/get/${slug}`
	).then(res => res.json())

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || []

	return {
		title: product[0].title,
		// openGraph: {
		//   images: ['/some-specific-page-image.jpg', ...previousImages],
		// },
	}
}

const getData = async (slug: string) => {
	const res = await fetch(`http://localhost:3000/api/news/get/${slug}`, {
		cache: 'no-store',
	})

	if (!res.ok) {
		throw new Error('Failed')
	}

	return res.json()
}

const SinglePage = async ({ params }: any) => {
	const { slug } = params

	const data = await getData(slug)
	console.log(data)
	return (
		<main>
			<Header />
			<Container>
				<div>
					<h1 className='post__title'>{data[0].title}</h1>
					<p className='post__date'>
						{data[0].date
							.split('T')[0]
							.replaceAll('-', '.')
							.split('.')
							.reverse()
							.join('.')}
					</p>
					<article>
						<div dangerouslySetInnerHTML={{ __html: data[0].text }} />
					</article>
				</div>
			</Container>
			<Footer />
		</main>
	)
}

export default SinglePage
