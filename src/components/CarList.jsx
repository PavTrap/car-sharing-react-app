import { useState } from 'react';
import { useEffect } from 'react';
import CarItem from './CarItem';
import { allCars } from '../api/api';
// import Modal from './Modal';

const CarList = () => {
	// const [isLoading, setIsLoading] = useState(false);
	const [cars, setCars] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(0);
	// const [modalActive, setModalActive] = useState(false);
	// const [carId, setCarId] = useState(null);


	useEffect(() => {
		const getAllCars = async () => {
			try {
				const res = await allCars(page, limit);
				setCars(cars=>[...cars ,...res]);
				setLimit(8);
			} catch (error) {
				console.log(error)
			}
		}
		getAllCars()
	},[page, limit]);

	// const openModal = id => {
	// 	setModalActive(true);
	// 	setCarId(id);
	//  };
	



	// //first loading page
	// useEffect(() => {
	// 	const getAllCars = async () => {
	// 		try {
	// 			setIsLoading(true);

	// 			const res = await allCars(1);
	// 			setCars(res);
	// 			console.log(res)

	// 			setIsLoading(false);
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// 	getAllCars()
	// },[]);


	// useEffect(() => {
	// 	const getLoadMoreCars = async () => {
	// 		 try {
	// 			const res = await allCars(page);
	// 			setCars(prev => [...prev, ...res]);
	// 		 } catch (error) {
	// 			console.log(error);
	// 		 };
	// 	  };
	// 	getLoadMoreCars();
	//  }, [page]);

	// setModalActive={openModal}
	
	return(
		<>
			<div style={carListContainer}>
					<ul style={carList}>
						{cars && cars.map(item => <CarItem cars={item} key={item.id} />)}
					</ul>
			</div>
			{/* <Modal active={modalActive} setActive={setModalActive} carId={carId}/> */}
			<button style={loadMoreBtn} onClick={() => setPage(page + 1)}>Load more</button>
		</>
	)
}
export default CarList;

const carListContainer = {
	// 'outline': '1px solid red',
	'maxWidth': '1200px',
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
	'padding': '0px',
	'marginBottom': '30px',
}
const loadMoreBtn = {
	'width': '150px',
	'height': '40px',
	'border': 'none',
	'backgroundColor': 'initial',
	'color': 'white',
	'fontWeight': '600',
}