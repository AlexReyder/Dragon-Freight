export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const jsonData: string | null = data.get('data') as unknown as string
	const res = JSON.parse(jsonData)

	const AllNewsJSON = fs.readFileSync('public/data/news.json', 'utf-8')

	const news = JSON.parse(AllNewsJSON)
	news.push(res)
	let result = JSON.stringify(news)
	fs.writeFileSync('public/data/news.json', result)

	return NextResponse.json('')
}
