'use client'
import isAuth from '@/admin-scenes/isAuth '
import AdminNews from '@/admin-scenes/news/AdminNews'
const Walls = () => {
	return <AdminNews />
}

export default isAuth(Walls)
