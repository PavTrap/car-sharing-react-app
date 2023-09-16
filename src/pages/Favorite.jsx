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
	'height': '100vh',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'flexDirection': 'column',
}