import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
		<div style={layout}>
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/catalog">Catalog</Link>
					<Link to="/favorite">Favorite</Link>
				</nav>
			</header>
			<main style={main}>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
			<footer>
				<div>footer</div>
			</footer>
		</div>
  );
};
export default Layout;


const layout = {
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'flexDirection': 'column',
	'width': '1200px',
	'margin': '0 auto',
};
const main = {
	// 'height': '450px',
	'paddingTop': '30px',
};