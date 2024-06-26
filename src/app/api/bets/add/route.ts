export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const jsonData: string | null = data.get('data') as unknown as string
	const res = JSON.parse(jsonData)

	const name = res.name
	const type = res.type
	const text = res.text

	const TelegramBot = require('node-telegram-bot-api')
	const token = '5542695949:AAGYWDFHAwd48suQEjxRu1y0PnrtjjxyghY'
	const bot = new TelegramBot(token, { polling: false })

	bot.sendMessage('@tetestbotbet1', text)

	let betResult = {
		name: name,
		type: type,
		text: text.replace(
			/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
			''
		),
		date: new Date(),
	}

	const AllBets = fs.readFileSync('public/data/bets.json', 'utf-8')
	const bet = JSON.parse(AllBets)
	if (bet.length >= 10) {
		bet.pop()
		bet.unshift(betResult)
		// const oldItem = bet.reduce(function (a, b) {
		// 	return a.date < b.date ? a : b
		// })
		// const oldItemIndex = bet.indexOf(oldItem)
		// bet[oldItemIndex] = betResult
	} else {
		bet.unshift(betResult)
	}

	let final = JSON.stringify(bet)
	fs.writeFileSync('public/data/bets.json', final)

	return NextResponse.json(final)
}
