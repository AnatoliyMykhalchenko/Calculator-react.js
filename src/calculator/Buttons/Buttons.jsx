import React from 'react';
import classes from './Buttons.module.css';
import Button from './Button/Button';

class Buttons extends React.Component {
	symbols = ['AC','+/-', '%', '/', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
	constructor(props) {
		super(props);
	};

	clickButton(symbol){
		this.props.click(symbol);
	};

	render() {
		const buttons = this.symbols.map((symbol,index) => {
			if(symbol === '=') {

			}
			return <Button key={index} symbol={symbol} click={this.clickButton.bind(this)} />;
		})


		return (
			<div className={classes.buttons}>
				{
					buttons
				}
			</div>

		);
	}
};

export default Buttons;