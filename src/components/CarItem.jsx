import FavoriteBtn from '../components/FavoriteBtn';

const CarItem = ({cars, refresh}) => {
const {
	id,
	year,
	make,
	model,
	type,
	img,
	// description,
	// fuelConsumption,
	// engineSize,
	accessories,
	// functionalities,
	rentalPrice,
	rentalCompany,
	// address,
	// rentalConditions,
	// mileage,
	favorite,
	} = cars;


	return(
						<li style={itemContainer}>
							<div style={itemIMG}>
								<FavoriteBtn style={favIcon} favorite={favorite} id={id} refresh={refresh}/>
								<img style={{'height':'100%', 'width':'auto'}}src={img} alt="photo_of_the_car" />
							</div>
							<div style={itemDescrContainer}>
								<div style={itemDescrContainerTitlePrice}>
									<p style={itemTitle}>{make} {model}, {year}</p>
									<p style={itemPrice}>{rentalPrice}</p>
								</div>		
								<ul style={itemDescrArray}>
									{/* <li>{getCity(item.address)}</li> */}
									{/* <li>{getCountry(item.address)}</li> */}
									<li style={itemDescrArrayItem}>{rentalCompany}</li>
									<li style={itemDescrArrayItem}>Premium</li>
									<li style={itemDescrArrayItem}>{type}</li>
									<li style={itemDescrArrayItem}>{model}</li>
									<li style={itemDescrArrayItem}>{id}</li>
									<li style={itemDescrArrayItem}>{accessories[2]}</li>
								</ul>
							</div>
							<button style={itemLearnMoreBtn}>Learn more</button>
						</li>
	)
}
export default CarItem;

const itemContainer = {
	'outline': '1px solid red',
	'width': '274px',
	'height': '426px',
	'position': 'relative',
};

const itemIMG = {
	'outline': '1px solid green',
	'width': '274px',
	'height': '268px',
	'borderRadius': '14px',
	'overflow': 'auto',
	'display': 'flex',
	'justifyContent': 'center',
	'marginBottom': '14px',
};
const favIcon = {
	'position': 'absolute',
	'top': '14px',
	'right': '14px',
	'color': 'white',
	'cursor': 'pointer',
	'zIndex': '20',
}
const itemDescrContainer = {
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'flexDirection': 'column',
	'gap': '8px'
};
const itemDescrContainerTitlePrice = {
	'outline': '1px solid blue',
	'width': '265px',
	'height': '24px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'space-between',
};
const itemTitle = {
	'outline': '1px solid orange',
	'minWidth': '30px',
};
const itemPrice = {
	'outline': '1px solid black',
	'minWidth': '30px',
};
const itemDescrArray = {
	'outline': '1px solid pink',
	'width': '265px',
	'height': '40px',
	'marginBottom': '28px',
	'display': 'flex',
	'alignItems': 'center',
	'flexWrap': 'wrap',
	'listStyle': 'none',
	'padding': '0px',
	'gap': '10px',
};
const itemDescrArrayItem = {
	'fontSize': '12px'
};
const itemLearnMoreBtn = {
	'width': '274px',
	'height': '44px',
	'backgroundColor': '#3470FF',
	'color': 'white',
	'borderRadius': '12px',
	'border': 'none',
};