import Filter from '../components/Filter';
import CarList from '../components/CarList';

const Catalog = () => {
	return(
		<div style={container}>
			<Filter />
			<CarList />
		</div>
	)
}
export default Catalog;

const container = {
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'flexDirection': 'column',
}