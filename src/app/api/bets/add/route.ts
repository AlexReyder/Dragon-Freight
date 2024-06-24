export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const jsonData: string | null = data.get('data') as unknown as string
	const res = JSON.parse(jsonData)
	const text = res.name

	const TelegramBot = require('node-telegram-bot-api')
	const token = '5542695949:AAGYWDFHAwd48suQEjxRu1y0PnrtjjxyghY'
	const bot = new TelegramBot(token, { polling: false })

	bot.sendMessage('@tetestbotbet1', text)
	console.log('hey')

	return NextResponse.json('Hey')
}
