import { useState } from 'react';
import FavoriteBtn from '../components/FavoriteBtn';
import {getCity} from '../utils/formatAdress';
import {getCountry} from '../utils/formatAdress';
import Modal from './Modal';

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
	address,
	// rentalConditions,
	// mileage,
	favorite,
	} = cars;
	const [modalActive, setModalActive] = useState(false);


	return(<>
						<li style={itemContainer}>
							<div style={itemIMG}>
								<FavoriteBtn style={favIcon} favorite={favorite} id={id} refresh={refresh}/>
								<img style={{'height':'100%', 'width':'auto'}}src={img} alt="photo_of_the_car" />
							</div>
							<div style={itemDescrContainer}>
								<div style={itemDescrContainerTitlePrice}>
									<h2 style={itemTitle}>{make} <span style={itemTitleSpan}>{model}</span>, {year}</h2>
									<h2 style={itemPrice}>{rentalPrice}</h2>
								</div>		
								<ul style={itemDescrArray}>
									<li style={itemDescrArrayItem}>{getCity(address)}</li>
									<li style={itemDescrArrayItem}>{getCountry(address)}</li>
									<li style={itemDescrArrayItem}>{rentalCompany}</li>
									<li style={itemDescrArrayItem}>Premium</li>
									<li style={itemDescrArrayItem}>{type}</li>
									<li style={itemDescrArrayItem}>{model}</li>
									<li style={itemDescrArrayItem}>{id}</li>
									<li style={itemDescrArrayItemLast}>{accessories[2]}</li>
								</ul>
							</div>
							<button style={itemLearnMoreBtn} onClick={() => setModalActive(true)}>Learn more</button>
						</li>
						<Modal active={modalActive} setActive={setModalActive}  car={cars}/>
						</>)
}
export default CarItem;

const itemContainer = {
	// 'outline': '1px solid red',
	'width': '274px',
	'height': '446px',
	'position': 'relative',
	'display': 'flex',
	'flexDirection': 'column',

};

const itemIMG = {
	// 'outline': '1px solid green',
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
	'gap': '8px',
	'flexGrow': '1',
};
const itemDescrContainerTitlePrice = {
	// 'outline': '1px solid blue',
	'width': '265px',
	'height': '24px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'space-between',
	'flexGrow': '1',
	'color': 'white',
	'margin': '0',
	// 'padding': '0',
};
const itemTitle = {
	// 'outline': '1px solid orange',
	'minWidth': '30px',
	'color': 'white',
	'fontSize': '18px',
	'fontWeight': '200',
};
const itemTitleSpan = {
	// 'outline': '1px solid orange',
	'minWidth': '30px',
	'color': 'rgba(52, 112, 255, 1)',
	'fontSize': '18px',
	'fontWeight': '200',
};
const itemPrice = {
	// 'outline': '1px solid black',
	'minWidth': '30px',
	'color': 'white',
	'fontSize': '18px',
	'fontWeight': '200',
};
const itemDescrArray = {
	// 'outline': '1px solid pink',
	'width': '265px',
	'height': '40px',
	'marginBottom': '28px',
	'display': 'flex',
	'alignItems': 'center',
	'flexWrap': 'wrap',
	'listStyle': 'none',
	'padding': '0px',
	'gap': '10px',
	'color': 'white',
	'fontSize': '12px',
};
const itemDescrArrayItem = {
	'fontSize': '12px',
	'color': 'white',
	'borderRight': '0.5px solid white',
	'paddingRight': '10px',
};
const itemDescrArrayItemLast = {
	'fontSize': '12px',
	'color': 'white',
	'borderRight': 'none',
	'paddingRight': '10px',
}
const itemLearnMoreBtn = {
	'width': '274px',
	'height': '44px',
	'backgroundColor': '#3470FF',
	'color': 'white',
	'borderRadius': '12px',
	'border': 'none',
};