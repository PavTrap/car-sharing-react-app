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
		{!favorite.length >= 1 ? 
			(<div style={carListContainer}>
				<p style={noCarsStyleText}>No favorite cars</p>
			</div>)
			:
			(<div style={carListContainer}>
				{/* <div style={carListContainerFlex} > */}
					<ul style={carList}>
						{favorite && favorite.map(item => <CarItem cars={item} key={item.id} refresh={setIsRemoveFav}/>)}
					</ul>
					<button style={loadMoreBtn} onClick={() => setPage(page + 1)}>Load more</button>
				{/* </div> */}
			</div> )
		}
			{/* <button style={loadMoreBtn} onClick={() => setPage(page + 1)}>Load more</button> */}
		</>
	)
}
export default FavoriteList;

const carListContainer = {
	// 'outline': '1px solid red',
	'maxWidth': '1200px',
	'height': '100vh',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'space-between',
	'flexDirection': 'column',
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
	'flexSrink': '1',
}
const loadMoreBtn = {
	'width': '150px',
	'height': '40px',
	'border': 'none',
	'backgroundColor': 'initial',
	'color': 'white',
	'fontWeight': '600',
}
const noCarsStyleText = {
	'color': 'white',
}