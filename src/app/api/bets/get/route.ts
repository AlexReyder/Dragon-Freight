export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const AllBetsJSON = fs.readFileSync('public/data/bets.json', 'utf-8')
	const bets = JSON.parse(AllBetsJSON)

	return NextResponse.json(bets)
}
