export const dynamic = 'force-dynamic'
import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const user: string | null = data.get('username') as unknown as string
	const phone: string | null = data.get('phone') as unknown as string
	const theme: string | null = data.get('theme') as unknown as string
	axios.get(
		`https://${process.env.bitrixUser}/rest/1/${process.env.bitrixKey}/crm.lead.add.json?FIELDS[TITLE]=${theme}&FIELDS[NAME]=${user}&FIELDS[LAST_NAME]=&FIELDS[EMAIL][0][VALUE]=&FIELDS[EMAIL][0][VALUE_TYPE]=&FIELDS[PHONE][0][VALUE]=${phone}&FIELDS[PHONE][0][VALUE_TYPE]=`
	)

	// const nodemailer = require('nodemailer')

	// const transporter = nodemailer.createTransport({
	// 	host: 'smtp.mail.ru',
	// 	port: 465,
	// 	// secure: true,
	// 	auth: {
	// 		// user: process.env.emailUser,
	// 		// pass: process.env.emailPass,
	// 		user: 'info@dragonfreight.ru',
	// 		pass: '1xUUHUaue3p(',
	// 	},
	// })

	// let message =
	// 	'Имя: ' + user + '\n' + 'Номер телефона: ' + phone + '\n' + 'Цель: ' + theme

	// const mailOptions = {
	// 	from: process.env.emailUser,
	// 	to: process.env.emailUser,
	// 	subject: 'Новая заявка',
	// 	text: message,
	// }

	// transporter.sendMail(mailOptions, function (error: any, info: any) {
	// 	if (error) {
	// 		console.log(error)
	// 	}
	// })

	return NextResponse.json('')
}
