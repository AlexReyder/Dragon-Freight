'use client'
import Header from '@/admin-scenes/Header'

import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import AddNews from './AddNews'
import SortableItem from './SortableItem'
// import EditPalettesModal from './editModal'
import EditNews from './EditNews'
import cls from './news.module.scss'

const AdminNews = () => {
	const [activeId, setActiveId] = useState(null)
	const [items, setItems] = useState<any>(null)
	const [addedPalettes, isPalettesAdded] = useState<any>([])
	const [deletedPalettes, setDeletedPalettes] = useState<any>([])
	const [openModal, setModalOpen] = useState(false)
	const [openEditModal, setEditModalOpen] = useState<boolean | null>(false)
	const [currentEditedId, setCurrentEditedId] = useState(1)

	const [trackUpdate, setTrackUpdate] = useState()

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/api/news/get', {
				headers: {
					'Cache-Control': 'no-cache',
					Pragma: 'no-cache',
					Expires: '0',
				},
			})
			setItems(result.data)
		}
		fetchData()
	}, [trackUpdate, addedPalettes])

	async function removeItem(index: number) {
		const result: any = items.filter((obj: any) => {
			return obj.date !== index
		})

		setItems((previousEmployeeData: any) =>
			previousEmployeeData.filter((data: any) => {
				return data.date !== index
			})
		)

		console.log(result)
		let formData = new FormData()
		formData.append('data', JSON.stringify(result))

		await axios
			.post('/api/news/remove', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.catch(e => {
				console.log(e)
			})
	}
	const updateData = () => {
		isPalettesAdded((prev: any) => [...prev, items.length + 1])
	}

	const handleEditModalOpen = (id: any) => {
		setEditModalOpen(true)
		setCurrentEditedId(id)
	}

	return (
		<section>
			<Header title='Новости' subtitle='Добавление и удаление новостей' />

			<div className={cls.PaletteContainer}>
				{items ? (
					<div>
						{items.map((item: any) => (
							<SortableItem
								key={item.date}
								id={item}
								handle={true}
								paletteName={item.title}
								paletteImg={item.thumbnail}
								remove={() => removeItem(item.date)}
								edit={() => handleEditModalOpen(item)}
							/>
						))}
					</div>
				) : null}
			</div>
			<div className={cls.PaletteWrapper}>
				<Button
					variant='contained'
					size='large'
					sx={{ mt: 3, mb: 2, mr: 2, backgroundColor: 'var(--color-primary)' }}
					endIcon={<AddIcon />}
					onClick={e => setModalOpen(true)}
				>
					Добавить новость
				</Button>
			</div>
			<AddNews
				open={openModal}
				handleClose={() => setModalOpen(false)}
				updateData={updateData}
			/>

			{openEditModal ? (
				<EditNews
					open={openEditModal}
					item={currentEditedId}
					handleClose={() => setEditModalOpen(null)}
					updateData={updateData}
				/>
			) : null}
		</section>
	)
}
export default AdminNews
