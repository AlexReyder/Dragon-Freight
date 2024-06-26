import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import './palettes.css'
const SortableItem = props => {
	const style = {
		width: '400px',
		height: '90px',
		backgroundColor: '#fff',
		boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
		margin: '10px',
	}

	return (
		<div style={style} className='palette'>
			<div className='palette__content'>
				<img src={props.paletteImg} alt='Новость' className='palette__img' />
				<p className='palette__name'>{props.paletteName}</p>
			</div>
			<div className='palette_controls'>
				<button className='palette__btn palette__trash' onClick={props.edit}>
					<EditIcon fontSize='large'></EditIcon>
				</button>
				<button className='palette__btn palette__trash' onClick={props.remove}>
					<DeleteIcon fontSize='large'></DeleteIcon>
				</button>
			</div>
		</div>
	)
}

export default SortableItem
