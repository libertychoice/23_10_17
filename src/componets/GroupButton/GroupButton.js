import React, { Component } from 'react';
import { ButtonToolbar, Col, Button } from 'react-bootstrap';
import './GroupButton.css'




class GroupButton extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		console.log(props)

	}

	inc = (id)=>{
		this.x  = x+1
	}

	onClick = (e)=>{
			let id = e.target.id

			this.props.click(id)
			let that = this;
			return (id)=>{
				that.inc(id);
			}
	}

	render() {
		const {data: data} = this.props; // this.props.data
		return (
			<Col md={10} mdOffset={2}>
				<ButtonToolbar>
					{data.map(el=><Button key={el.name} onClick={this.onClick} bsStyle="info">{el.name}</Button>)}
				</ButtonToolbar>
			</Col>
		);
	}
}

GroupButton.defaultProps = {
	data:[],
}

export default GroupButton;