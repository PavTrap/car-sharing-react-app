import FavoriteList from '../components/FavoriteList';

const Favorite = () => {
	return(
		<div style={container}>
			<FavoriteList />
		</div>
	)
}
export default Favorite;


const container = {
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'flexDirection': 'column',
}