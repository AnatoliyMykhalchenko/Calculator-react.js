import React from 'react';
import classes from './TopBlock.module.css';

class TopBlock extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return (
			<div className={classes.wrapper}>
				<div className={classes.actions}>{this.props.actions}</div>
				<div className={classes.result}>{this.props.result}</div>
				<div className={classes.line}></div>
			</div>
		);
	}
};



export default TopBlock;