export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const AllPostsJSON = fs.readFileSync('public/data/news.json', 'utf-8')
	const posts = JSON.parse(AllPostsJSON)

	return NextResponse.json(posts)
}
