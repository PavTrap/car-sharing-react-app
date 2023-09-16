import { useState } from 'react';
import { useEffect } from 'react';
import CarItem from './CarItem';
import { getFavorites } from '../api/api';

const FavoriteList = () => {
	const [favorite, setFavorite] = useState([]);
	const [page, setPage] = useState(1);
	// const [limit, setLimit] = useState(0);
	const [isRemoveFav, setIsRemoveFav] = useState(false);


	// Maunting page
	useEffect(() => {
		const getAllCars = async () => {
			try {
				const res = await getFavorites(1, 4);
				setFavorite(res);
			} catch (error) {
				console.log(error)
			}
		}
		getAllCars()
	},[]);

	// Update page
	useEffect(() => {
		const getAllCars = async () => {
			try {
				const res = await getFavorites(1, 4);
				setFavorite(res);
			} catch (error) {
				console.log(error)
			}
		}
		getAllCars()
	},[isRemoveFav]);

	// Pagination
	useEffect(() => {
		const getAllCars = async () => {
			if(page !== 1){
				try {
					const res = await getFavorites(page, 4);
					setFavorite(prev => [...prev, ...res]);
				} catch (error) {
					console.log(error)
				}
			}
		}
		getAllCars()
	},[page]);

	



	
	return(
		<>
			<div style={carListContainer}>
				<ul style={carList}>
					{favorite && favorite.map(item => <CarItem cars={item} key={item.id} refresh={setIsRemoveFav}/>)}
				</ul>
			</div> 
			<button style={loadMoreBtn} onClick={() => setPage(page + 1)}>Load more</button>
		</>
	)
}
export default FavoriteList;

const carListContainer = {
	'outline': '1px solid red',
	'width': '1184px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
};
const carList = {
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