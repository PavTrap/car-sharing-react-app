import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg';
const Home = () => {
	return(
		<div style={homeContainer}>
			<h1 style={homeTitle}>Take a Car of Your Dream</h1>
			<div style={homeHeroContainer}>
				<img style={homeHeroImg}src={hero} alt="hero_page" />
			</div>
			<Link to="/catalog" style={catalogBtnHome}>Catalog</Link>
		</div>
	)
}
export default Home;

const homeContainer = {
	'width': '100vw',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'flexDirection': 'column',
};
const homeTitle = {
	'fontSize': '80px',
	'color': 'white',
	'fontWeight': '200',
};
const homeHeroContainer = {
	'maxWidth': '1000px',
	'maxHeight': '500px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'overflow': 'hidden',
};
const homeHeroImg = {
	'maxWidth': '1000px',
}
const catalogBtnHome = {
	'width': '150px',
	'height': '40px',
	'border': 'none',
	'backgroundColor': 'initial',
	'color': 'white',
	'fontSize': '18px',
	'fontWeight': '600',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'textDecoration': 'none',
};
