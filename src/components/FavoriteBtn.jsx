import { useState } from 'react';
import {addCarsToFavorite} from '../api/api';
import notFavoriteSvg from '../assets/notFavorite.svg';
import favoriteSvg from '../assets/favorite.svg';


const FavoriteBtn = ({style, id, favorite, refresh}) => {
	const [fav, setFav] = useState(favorite);
	const [disable, setDisable] = useState(false);


	const onClickFavorite = async () => {
		setDisable(true);
		if(!fav){
			const res = await addCarsToFavorite(id, true);
			res && setFav(true);
			setDisable(false);
			refresh && refresh(prev => !prev);
		}
		if(fav){
			const res = await addCarsToFavorite(id, false);
			res && setFav(false);
			setDisable(false);
			refresh && refresh(prev => !prev);
		}
	} 

	return(
	<div style={style} onClick={onClickFavorite} disabled={disable}> 
		{fav ?  <img src={favoriteSvg} alt="favorite"/> : <img src={notFavoriteSvg} alt="not-favorite"/>}
	</div>
	)
}
export default FavoriteBtn;