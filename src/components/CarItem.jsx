const CarItem = ({cars}) => {
// id
// year
// make
// model
// type
// img
// description
// fuelConsumption
// engineSize
// accessories
// functionalities
// rentalPrice
// rentalCompany
// address
// rentalConditions
// mileage

	return(
		<>
			{cars.map(item => {
					return (
						<li style={itemContainer} key={item.id}>
							<div style={itemIMG}>
								<img style={{'height':'100%', 'width':'auto'}}src={item.img} alt="photo_of_the_car" />
							</div>
							<div style={itemDescrContainer}>
								<div style={itemDescrContainerTitlePrice}>
									<p style={itemTitle}>{item.make} {item.model}, {item.year}</p>
									<p style={itemPrice}>{item.rentalPrice}</p>
								</div>
								<div style={itemDescrArray}>
									<span style={itemDescrArrayItem}>{item.address}</span>
								</div>
							</div>
							<button style={itemLearnMoreBtn}>Learn more</button>
						</li>
					);
			})}
		</>
	)
}
export default CarItem;

const itemContainer = {
	'outline': '1px solid red',
	'width': '274px',
	'height': '426px',
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
};
const itemDescrArrayItem = {};
const itemLearnMoreBtn = {
	'width': '274px',
	'height': '44px',
	'backgroundColor': '#3470FF',
	'color': 'white',
	'borderRadius': '12px',
	'border': 'none',
};