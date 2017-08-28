import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
	render() {
		return (

			<div className="product">

			<p>{this.props.name}</p>
			<p>{this.props.producer}</p>
			<p>{this.props.hasWatermark}</p>
			<p>{this.props.color}</p>
			<p>{this.props.weight}</p>

			</div>

			)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: weightValidator
};


function weightValidator(props, propName){
	if (!props[propName]) {
 			return new Error(propName + ' is Required.')
 		}

 	if (typeof props[propName] !== 'number') {
 			return new Error(propName + 'is not a number.')
 		}
 
 	if ((props[propName] < 80 || props[propName] > 300)) { return new Error(propName + 'range is between 80 and 300.')
 		}

} 		
 		
 