import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import { data } from './data/items';
import {Link} from 'react-router-dom'

class About extends Component {
	constructor(props) {
		super();
		this.state = {
			data: data,
		};
		console.log(props)
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col md={4} mdOffset={3}>
						<h1>Hello - About</h1>
						<Link to={"/"}>Main Page</Link>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default About;
