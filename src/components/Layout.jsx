import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
		<div style={layout}>
			<header style={headerContainer}>
				<nav  style={headerNavContainer}>
					<Link to="/" style={navHome}>Home</Link>
					<Link to="/catalog" style={navCatalog}>Catalog</Link>
					<Link to="/favorite" style={navFavorite}>Favorite</Link>
				</nav>
			</header>
			<main style={main}>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
		</div>
  );
};
export default Layout;


const layout = {
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'flexDirection': 'column',
	'margin': '0 auto',

};
const headerContainer = {

	'width': '100%',
	'height': '50px',
	'boxSizing': 'border-box',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'backgroundColor': 'rgba(1, 1, 1, 1)',
	'borderBottom': '1px solid rgb(98, 99, 99)',
};
const headerNavContainer = {
	// 'outline': '1px solid pink',
	'boxSizing': 'border-box',
	'width': '1200px',
	'height': '40px',
	'paddingLeft': '40px',
	'paddingRight': '40px',
	'display': 'flex',
	'alignItems': 'center',
	'gap': '20px',
}
const navHome = {
	'textDecoration': 'none',
	'flexGrow': '1',
	'fontWeight': '600',
	'color': 'white',
};
const navCatalog = {
	'textDecoration': 'none',
	'fontWeight': '600',
	'color': 'white',
};
const navFavorite = {
	'textDecoration': 'none',
	'fontWeight': '600',
	'color': 'white',
};
 

const main = {
	'width': '100%',
	// 'minHeight': '100vh',
	'height': '100rem',
	'backgroundColor': 'rgba(1, 1, 1, 1)',
	'padding': '30px 10px'
};
