'use client'
import AdminBets from '@/admin-scenes/bet/AdminBets'
import isAuth from '@/admin-scenes/isAuth '
const Floors = () => {
	return <AdminBets type='floors' />
}

export default isAuth(Floors)
