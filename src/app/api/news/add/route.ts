export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const jsonData: string | null = data.get('data') as unknown as string
	const res = JSON.parse(jsonData)
	console.log(res)
	const AllProductsJSON = fs.readFileSync('public/data/news.json', 'utf-8')

	const products = JSON.parse(AllProductsJSON)
	products.push(res)
	let result = JSON.stringify(products)
	fs.writeFileSync('public/data/news.json', result)

	return NextResponse.json('Hey')
}
