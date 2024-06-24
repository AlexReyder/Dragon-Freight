import { Container } from '@/shared/ui/Layout/Container/Container'
import './page.css'

const getData = async title => {
	const res = await fetch(`http://localhost:3000/api/news/get/${title}`, {
		cache: 'no-store',
	})

	if (!res.ok) {
		throw new Error('Failed')
	}

	return res.json()
}

const SinglePage = async ({ params }) => {
	const { title } = params

	const data = await getData(title)
	console.log(data)
	return (
		<Container>
			<div>
				<h2>HI!!!!</h2>
				<div>
					<div dangerouslySetInnerHTML={{ __html: data[0].desc }} />
				</div>
			</div>
		</Container>
	)
}

export default SinglePage
