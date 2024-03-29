import React from 'react';
import classes from './Button.module.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.onClickButton = this.onClickButton.bind(this);
	};

	render() {

		return (
			<div className={this.props.symbol === '=' ? `${classes.button} ${classes.equally}` : 
			typeof this.props.symbol !== 'number' && this.props.symbol !== '.' ?  `${classes.button} ${classes.action}` :
			classes.button} 
			onClick={this.onClickButton}
			>
				{this.props.symbol}
			</div>

		);
	}

	onClickButton(e){
		// console.log(e.target);
		const target = e.target;
		this.props.click(target.innerHTML);
		target.classList.add(`${classes.back}`);
		setTimeout((e) => {
			target.classList.remove(`${classes.back}`);
		}, 300)
	}
};

export default Button;