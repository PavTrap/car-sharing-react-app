import { useState } from 'react';
import { useEffect } from 'react';
import CarItem from './CarItem';
import { allCars } from '../api/api';

const CarList = () => {
	const [isLoading, setLoading] = useState(false);
	const [cars, setCars] = useState([]);
	const [page, setPage] = useState(1);
	console.log(page)



	//first loading page
	useEffect(() => {
		const getAllCars = async () => {
			try {
				setLoading(true);

				const res = await allCars();
				setCars(res);

				setLoading(false);
			} catch (error) {
				console.log(error)
			}
		}
		getAllCars()
	},[]);



	//pagination
	// useEffect(() => {
	// 	const getAllCars = async () => {
	// 		const page = currentPage;
	// 		try {
	// 			setLoading(true);

	// 			const res = await allCars(page);
	// 			setCars(res);
	// 			console.log(res)

	// 			setLoading(false);
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// 	getAllCars()
	// },[]);
	//
	// useEffect(() => {
	// 	if (currentPage !== 1 && !isLoading) {
	// 	  (async () => {
	// 		 try {
	// 			const res = await allCars(currentPage);
	// 			res &&  setCars(prev => {
	// 				 				return [...prev, ...res];
	// 			  				});
	// 		 } catch (error) {
	// 			console.log(error);
	// 		 }
	// 	  })();
	// 	}
	//  }, [isLoading, currentPage]);



	useEffect(() => {
		const getLoadMoreCars = async () => {
			 try {
				setLoading(true);

				const res = await allCars(page);
				setCars(prev => {
					return [...prev, ...res];
				});
				// setCars(res);

				setLoading(false);
			 } catch (error) {
				console.log(error);
			 };
		  };
		getLoadMoreCars();
	 }, [page]);


	
	return(
		<>
			<div style={carListContainer}>
				{isLoading ? (<div>Loading...</div>) : (
					<ul style={carList}>
						{/* <CarItem cars={cars}/> */}
						{cars && cars.map(item => <CarItem cars={item} key={item.id}/>)}
					</ul>
					)}
			</div>
			{/* <button style={loadMoreBtn} onClick={() => setPage(prev => prev - 1)}>Load less</button> */}
			<button style={loadMoreBtn} onClick={() => setPage(prev => prev + 1)}>Load more</button>
			{/* {showLoadMore && cars?.length > 7 && (
        		<button onClick={() => setCurrentPage(prev => prev + 1)}>Load more</button>
      	)} */}
		</>
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
const loadMoreBtn = {
	'width': '100px',
	'height': '40px',
}