'use client'

import AdminBets from '@/admin-scenes/bet/AdminBets'
import isAuth from '@/admin-scenes/isAuth '
const Floors = () => {
	return <AdminBets />
}

export default isAuth(Floors)
