const Filter = () => {
	return(
		<div style={filterContainer}>
			<form style={filterForm}>
				<div style={lableContainer}>
					<div style={lable}>Car brand</div>
					<input style={filterCarBrand} type="text" placeholder="Enter the text" />
				</div>
				<div style={lableContainer}>
					<div style={lable}>Price/ 1hour</div>
					<input style={filterPrice} type="text" placeholder="To $" />
				</div>
				<div style={lableContainer}>
					<div style={lable}>Car mileage / km</div>
					<div style={filterCarMillege}>
						<input style={filterCarMillegeFrom}type="text" placeholder="From"  />
						<input  style={filterCarMillegeTo} type="text" placeholder="To" />
					</div>
				</div>
				<button style={filterSearchBtn} type="button">search</button>
			</form>
		</div>
	)
}
export default Filter;

const filterContainer = {
	'width': '860px',
	'height': '74px',
	'outline': '1px solid red',
	'display': 'flex',
	'alignItems': 'end',
	'justifyContent': 'center',
	'marginBottom': '50px',
};
const filterForm = {
	'width': '860px',
	'height': '48px',
	'display': 'flex',
	'gap': '18px',
	'alignItems': 'end',
	'justifyContent': 'center',
};
const lableContainer = {
	'display': 'flex',
	'flexDirection': 'column',
	'gap': '8px',
}
const lable = {
	'fontSize': '14px',
	'color': '#8A8A89',
}
const filterCarBrand = {
	'width': '224px',
	'height': '48px',
	'border': 'none',
	'borderRadius': '14px',
	'backgroundColor': '#F7F7FB',
	'padding': '14px 18px',
};
const filterPrice = {
	'width': '125px',
	'height': '48px',
	'border': 'none',
	'borderRadius': '14px',
	'backgroundColor': '#F7F7FB',
	'padding': '14px 18px',
}
const filterCarMillege = {
	'width': '320px',
	// 'height': '48px',
	'display': 'flex',
}
const filterCarMillegeFrom = {
	'width': '160px',
	'height': '48px',
	'border': 'none',
	'borderRight': '1px solid rgba(138, 138, 137, 0.2)',
	'borderRadius': '14px 0 0 14px',
	'backgroundColor': '#F7F7FB',
	'padding': '14px 18px',
}
const filterCarMillegeTo = {
	'width': '160px',
	'height': '48px',
	'border': 'none',
	'borderRadius': '0 14px 14px 0',
	'backgroundColor': '#F7F7FB',
	'padding': '14px 18px',
}
const filterSearchBtn = {
	'width': '136px',
	'height': '48px',
	'display': 'flex',
	'alignItems': 'center',
	'justifyContent': 'center',
	'border': 'none',
	'borderRadius': '12px',
	'backgroundColor': '#3470FF',
	'color': 'white',
}