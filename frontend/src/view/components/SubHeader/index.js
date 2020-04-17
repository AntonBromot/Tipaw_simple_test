import React  from "react";
import PropTypes from 'prop-types'

const SubHeader = ({ mainText, additionText }) => (
	<div className="subHeader">
		<div className='mainText'>{ mainText }</div>
	  <div className='additionText'>{ additionText }</div>
	</div>
)

SubHeader.propTypes = {
	mainText: PropTypes.string,
	additionText: PropTypes.string
}

export default SubHeader;
