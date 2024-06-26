import fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } }
) {
	const slug = params.slug // 'a', 'b', or 'c'

	const AllProductsJSON = fs.readFileSync('public/data/news.json', 'utf-8')

	const products = JSON.parse(AllProductsJSON)
	let result = products.filter((el: any) => el.slug === slug)

	return NextResponse.json(result)
}
