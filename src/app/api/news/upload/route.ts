import fs from 'fs'
import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
import path from 'path'

export async function POST(request: Request) {
	const data = await request.formData()
	const image: File | null = data.get('image') as unknown as File
	if (!image) {
		return NextResponse.json({ success: false })
	}

	const bytesImage = await image.arrayBuffer()
	const bufferImage = Buffer.from(bytesImage)

	const directoryPathGeneral = `upload/news`

	if (!fs.existsSync(directoryPathGeneral)) {
		fs.mkdirSync(directoryPathGeneral)
	}

	const fileName = makeid(10)
	const fileNameExtOrg = path.extname(image.name)

	const originalFilePath =
		directoryPathGeneral + `/${fileName}.${fileNameExtOrg}`

	writeFile(originalFilePath, bufferImage)

	const res = {
		url: '/' + originalFilePath,
	}

	return NextResponse.json(res)
}

function makeid(length: number) {
	let result = ''
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const charactersLength = characters.length
	let counter = 0
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
		counter += 1
	}
	return result
}
