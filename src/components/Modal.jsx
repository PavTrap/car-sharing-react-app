import { getCity, getCountry, arrayFromString } from '../utils/formatAdress';
const Modal = ({ car, active, setActive}) => {
	const {
		id,
		year,
		make,
		model,
		type,
		img,
		description,
		fuelConsumption,
		engineSize,
		// accessories,
		functionalities,
		rentalPrice,
		// rentalCompany,
		address,
		rentalConditions,
		mileage,
		// favorite,
		} = car;


	return(
		<div style={active? backDropShow : backDrop} onClick={() => setActive(false)}>
			<div style={modal} onClick={e => e.stopPropagation()}>

				<div style={closeBtn} onClick={() => setActive(false)}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18 6L6 18" stroke="#121417" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M6 6L18 18" stroke="#121417" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div style={modalImgBlock}>
					<img  style={modalImg} src={img} alt="" />
				</div>
				<div style={itemDescrContainerTitlePrice}>
					<h2 style={itemTitle}>{make} <span style={itemTitleSpan}>{model}</span>, {year}</h2>
					<ul style={itemDescrArray}>
						<li style={itemDescrArrayItem}>{getCity(address)}</li>
						<li style={itemDescrArrayItem}>{getCountry(address)}</li>
						<li style={itemDescrArrayItem}>id: {id}</li>
						<li style={itemDescrArrayItem}>type: {type}</li>
						<li style={itemDescrArrayItem}>Fuel Consumption: {fuelConsumption}</li>
						<li style={itemDescrArrayItem}>Engine Size: {engineSize}</li>
						{/* <li style={itemDescrArrayItemLast}>{accessories[2]}</li> */}
					</ul>
					<p style={itemDescrText}>{description}</p>
				</div>	
				<div style={accsesorize}>
					<h4 style={accsesorizeTitle}>Accessories and functionalities:</h4>
					<ul style={accsesorizeArray}>
						{functionalities && functionalities.map(item => <li style={accsesorizeArrayItem}>{item}</li>)}
					</ul>
				</div>
				<div style={rentalDescr}>
					<h4 style={rentalDescrTitle}>Rental Conditions: </h4>
					<ul style={rentalDescrArray}>
						{arrayFromString(rentalConditions).map((item, index) => {
							if (item.includes(':')) {
								return (
									<li key={index} style={rentalDescrArrayItem}> {item.split(':')[0]}: <span style={rentalDescrArrayItemSpan}>{item.split(':')[1]}</span> </li>
								);
							} else {
								return <li key={index} style={rentalDescrArrayItem}>{item}</li>;
								}
						})}
						<li style={rentalDescrArrayItem}>Mileage: <span style={rentalDescrArrayItemSpan}>{mileage}</span></li>
						<li style={rentalDescrArrayItem}>Price: <span style={rentalDescrArrayItemSpan}>{rentalPrice}</span></li>
					</ul>
				</div>
				<button style={rentCarBtn}>Rental car</button>
			</div>
		</div>
	)
}
export default Modal;

const backDrop = {
	'padding': '15px',
	'height': '100vh',
	'width': '100vw',
	'backgroundColor': 'rgba(1, 1, 1, 0.4)',
	'position': 'fixed',
	'top': '0',
	'left': '0',
	'zIndex': '40',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'transform': 'scale(0)',
};
const backDropShow = {
	'padding': '15px',
	'height': '100vh',
	'width': '100vw',
	'backgroundColor': 'rgba(1, 1, 1, 0.8)',
	'position': 'fixed',
	'top': '0',
	'left': '0',
	'zIndex': '40',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'transform': 'scale(1)',
};
const modal = {
	'maxHeight': '752px',
	'maxWidth': '542px',
	// 'height': '752px',
	'width': '542px',
	'backgroundColor': 'white',
	'borderRadius': '20px',
	'padding': '40px',
	'position': 'relative',
};
const modalImgBlock = {
	'width': '462px',
	'height': '248px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'overflow': 'hidden',
	'marginBottom': '14px',
};
const closeBtn = {
	'position': 'absolute',
	'width': '12px',
	'height': '12px',
	'top': '15px',
	'right': '25px',
	'color': 'black',
};
const modalImg ={
	'width': '462px',
};
const itemDescrContainerTitlePrice ={
	// 'width': '265px',
	// 'height': '24px',
	'margin': '0',
};
const itemTitle = {
	'minWidth': '30px',
	'color': 'black',
	'fontSize': '18px',
	'fontWeight': '400',
	'marginBottom': '8px',
};
const itemTitleSpan = {
	'minWidth': '30px',
	'color': 'rgba(52, 112, 255, 1)',
	'fontSize': '18px',
	'fontWeight': '400',
};
const itemDescrArray = {
	'display': 'flex',
	'listStyle': 'none',
	'gap': '6px',
	'padding': '0px',
	'margin': '0',
	'flexWrap': 'wrap',
	'fontSize': '12px',
	'marginBottom': '14px',
	'fontWeight': '200',
};
const itemDescrArrayItem = {
	'borderRight': '0.5px solid black',
	'paddingRight': '6px',
};
// const itemDescrArrayItemLast = {};
const itemDescrText = {
	'fontSize': '12px',
	'fontWeight': '400',
	'marginBottom': '24px',
};
const accsesorize = {
	'marginBottom': '24px',
};
const accsesorizeTitle = {
	'fontSize': '14px',
	'fontWeight': '400',
	'marginBottom': '8px',
};
const accsesorizeArray = {
	'display': 'flex',
	'listStyle': 'none',
	'gap': '6px',
	'padding': '0px',
	'margin': '0',
	'flexWrap': 'wrap',
	'fontSize': '12px',
	'marginBottom': '14px',
	'fontWeight': '200',
};
const accsesorizeArrayItem = {
	'borderRight': '0.5px solid black',
	'paddingRight': '6px',
};
// const accsesorizeArrayItemLast = {};
const rentalDescr = {
	'marginBottom': '24px',
};
const rentalDescrTitle = {
	'fontSize': '14px',
	'fontWeight': '400',
	'marginBottom': '8px',
};
const rentalDescrArray = {
	'display': 'flex',
	'listStyle': 'none',
	'gap': '8px',
	'padding': '0px',
	'margin': '0',
	'flexWrap': 'wrap',
	'fontSize': '12px',
	// 'marginBottom': '14px',
	'fontWeight': '200',
};
const rentalDescrArrayItem = {
	'backgroundColor': '#F9F9F9',
	'borderRadius': '35px',
	'padding': '7px 14px',
};
const rentalDescrArrayItemSpan = {
	'color': 'rgba(52, 112, 255, 1)',
	'fontWeight': '400',
};
const rentCarBtn = {
	'height': '44px',
	'width': '168px',
	'borderRadius': '12px',
	'border': 'none',
	'backgroundColor': '#3470FF',
	'color': 'white',
	'fontSize': '14px',
	'fontWeight': '400',
};


