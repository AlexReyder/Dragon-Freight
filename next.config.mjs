/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'https://dragonfreight.ru/',
				port: '',
				pathname: '**',
			},
		],
	},
	env: {
		domainUrl: process.env.DOMAIN,
		emailUser: process.env.EMAIL_LOGIN,
		emailPass: process.env.EMAIL_PASS,
		bitrixUser: process.env.BITRIX_USER,
		bitrixKey: process.env.BITRIX_KEY,
	},
	// cacheBust: true,
	typescript: {
		ignoreBuildErrors: true,
	},
}

export default nextConfig
