// 'use client'
// import Header from '@/admin-scenes/Header'
// import {
// 	DndContext,
// 	DragOverlay,
// 	KeyboardSensor,
// 	PointerSensor,
// 	closestCenter,
// 	useSensor,
// 	useSensors,
// } from '@dnd-kit/core'
// import {
// 	SortableContext,
// 	arrayMove,
// 	rectSortingStrategy,
// 	sortableKeyboardCoordinates,
// } from '@dnd-kit/sortable'
// import AddIcon from '@mui/icons-material/Add'
// import { Button } from '@mui/material'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import AddNews from './AddNews'
// import SortableItem from './SortableItem'
// import EditPalettesModal from './editModal'
// import './palettes.css'
// import cls from './product.module.scss'

const AdminNews = ({ type }: any) => {
	// const [activeId, setActiveId] = useState(null)
	// const [items, setItems] = useState<any>(null)
	// const [addedPalettes, isPalettesAdded] = useState<any>([])
	// const [deletedPalettes, setDeletedPalettes] = useState<any>([])
	// const [openModal, setModalOpen] = useState(false)
	// const [openEditModal, setEditModalOpen] = useState<boolean | null>(false)
	// const [currentEditedId, setCurrentEditedId] = useState(1)

	// const [trackUpdate, setTrackUpdate] = useState()

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = await axios('/api/admin/getProducts', {
	// 			headers: {
	// 				'Cache-Control': 'no-cache',
	// 				Pragma: 'no-cache',
	// 				Expires: '0',
	// 			},
	// 		})
	// 		const filter = result.data.filter((el: any) => el.type === type)
	// 		setItems(filter)
	// 	}
	// 	fetchData()
	// }, [trackUpdate, addedPalettes])

	// const sensors = useSensors(
	// 	useSensor(PointerSensor),
	// 	useSensor(KeyboardSensor, {
	// 		coordinateGetter: sortableKeyboardCoordinates,
	// 	})
	// )

	// const handleDragStart = (event: any) => {
	// 	setActiveId(event.active.id)
	// }

	// const handleDragEnd = (event: any) => {
	// 	setActiveId(null)
	// 	const { active, over } = event
	// 	if (active.id !== over.id) {
	// 		setItems((items: any) => {
	// 			const oldIndex = items.indexOf(active.id)
	// 			const newIndex = items.indexOf(over.id)

	// 			return arrayMove(items, oldIndex, newIndex)
	// 		})
	// 	}
	// }

	// const removeItem = (index: number) => {
	// 	const result = items.filter((obj: any) => {
	// 		return obj.id === index
	// 	})

	// 	setItems((previousEmployeeData: any) =>
	// 		previousEmployeeData.filter((data: any) => {
	// 			return data.id !== index
	// 		})
	// 	)

	// 	setDeletedPalettes((prev: any) => [...prev, result[0]])
	// }
	// const updateData = () => {
	// 	// isPalettesAdded((prev: any) => [...prev, items.length + 1])
	// }
	// const saveOrder = () => {
	// 	let formData = new FormData()
	// 	formData.append('order', JSON.stringify(items))
	// 	formData.append('delete', JSON.stringify(deletedPalettes))
	// 	axios
	// 		.post('/api/admin/saveOrder', formData, {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		})
	// 		.then(res => {
	// 			setTrackUpdate(items)
	// 		})
	// }

	// const handleEditModalOpen = (id: number) => {
	// 	setEditModalOpen(true)
	// 	setCurrentEditedId(id)
	// }

	return (
		<></>
		// <DndContext
		// 	sensors={sensors}
		// 	collisionDetection={closestCenter}
		// 	onDragEnd={handleDragEnd}
		// 	onDragStart={handleDragStart}
		// >
		// 	<Header title='Ставки' subtitle='Добавление и удаление ставок' />

		// 	<div className={cls.PaletteContainer}>
		// 		{items ? (
		// 			<SortableContext items={items} strategy={rectSortingStrategy}>
		// 				{items.map((item: any) => (
		// 					<SortableItem
		// 						key={item.id}
		// 						id={item}
		// 						handle={true}
		// 						paletteName={item.name}
		// 						paletteImg={item.minuature[0]}
		// 						remove={() => removeItem(item.id)}
		// 						edit={() => handleEditModalOpen(item.id)}
		// 					/>
		// 				))}
		// 				<DragOverlay>
		// 					{activeId ? (
		// 						<div
		// 							style={{
		// 								width: '300px',
		// 								height: '70px',
		// 								backgroundColor: 'var(--color-primary)',
		// 							}}
		// 						></div>
		// 					) : null}
		// 				</DragOverlay>
		// 			</SortableContext>
		// 		) : null}
		// 	</div>
		// 	<div className={cls.PaletteWrapper}>
		// 		<Button
		// 			variant='contained'
		// 			size='large'
		// 			sx={{ mt: 3, mb: 2, mr: 2, backgroundColor: 'var(--color-primary)' }}
		// 			endIcon={<AddIcon />}
		// 			onClick={e => setModalOpen(true)}
		// 		>
		// 			Добавить новую ставку
		// 		</Button>
		// 		<Button
		// 			variant='contained'
		// 			size='large'
		// 			sx={{ mt: 3, mb: 2, backgroundColor: 'var(--color-primary)' }}
		// 			onClick={saveOrder}
		// 		>
		// 			Сохранить изменения
		// 		</Button>
		// 	</div>
		// 	<AddNews
		// 		open={openModal}
		// 		folderName={uuidv4()}
		// 		type={type}
		// 		handleClose={() => setModalOpen(false)}
		// 		updateData={updateData}
		// 	/>

		// 	{openEditModal ? (
		// 		<EditPalettesModal
		// 			open={openEditModal}
		// 			itemId={currentEditedId}
		// 			handleClose={() => setEditModalOpen(null)}
		// 			updateData={updateData}
		// 		/>
		// 	) : null}
		// </DndContext>
	)
}
export default AdminNews
