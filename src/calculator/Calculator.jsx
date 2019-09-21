import React from 'react';
import classes from './Calculator.module.css';
import TopBlock from './TopBlock/TopBlock';
import Buttons from './Buttons/Buttons';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actions: '',
			result: ''
		};
	};

	clickButton(symbol){
		if(symbol === 'AC') this.setState({actions: '',result: ''})
		else if(symbol === '=') {
			this.setState({
				result: new Function('', `return ${this.state.actions}`)()
			});
		}
		else if(symbol === '×') {
			this.setState({
				actions: this.state.actions + '*'
			})
		}
		else {
			this.setState({
				actions: this.state.actions + symbol
			})
			console.log(this.state);
		};

	};



	render() {
		return (
			<div className={classes.wrapper}>
				<TopBlock actions={this.state.actions} result={this.state.result}/>
				<Buttons click={this.clickButton.bind(this)} />
			</div>

		);
	}
};

export default Calculator;