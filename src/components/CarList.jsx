import { useState } from 'react';
import { useEffect } from 'react';
import CarItem from './CarItem';
import { allCars } from '../api/api';

const CarList = () => {
	const [isLoading, setLoading] = useState(false);
	const [cars, setCars] = useState([]);

	useEffect(() => {
		const getAllCars = async (data) => {
			try {
				setLoading(true);

				const res = await allCars(data);
				setCars(res);

				setLoading(false);
			} catch (error) {
				console.log(error)
			}
		}
		getAllCars()
	},[])

	return(
		<div style={carListContainer}>
			{isLoading ? (<div>Loading...</div>) : (
				<ul style={carList}>
					<CarItem cars={cars}/>
				</ul>
				)}
		</div>
	)
}
export default CarList;

const carListContainer = {
	'outline': '1px solid red',
	'width': '1184px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
};
const carList = {
	// 'outline': '1px solid red',
	// 'width': '1184px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'gap': '29px',
	'flexWrap': 'wrap',
	'listStyle': 'none',
	'padding': '0px'
}