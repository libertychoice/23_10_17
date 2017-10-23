import React, { Component } from 'react';
import { Button, Grid, Row } from 'react-bootstrap';
import './App.css';
import { data } from './data/items';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {addCity, removeLastCity} from './actions/cites.action'


class App extends Component {
	constructor(props) {
		super();
		console.log(props)
		this.state = {
			data: data,
			city: '',
		};
	}

	writeCity = (e)=>{
		this.setState({city:e.target.value})
	};



	saveCity = () =>{
		this.props.addCity(this.state.city);
		this.setState({city:''});
		console.log(this.state.city)

	};

	render() {
		const {cit:cites, removeCity: RC} = this.props;
		return (
			<Grid>
				<Row>
					
					<Button bsStyle="danger"> test</Button>
					<Link to={'/about/23'}>About</Link>
					<br/>
					<input type="text" onChange={this.writeCity} onClick={this.writeCity} className='input-md'/>
					<br/>
					<Button onClick={this.saveCity} bsStyle="danger">Add </Button>
					<Button onClick={RC} bsStyle="danger">Remove </Button>
					<br/>
					<ul>
						{cites.size ===0?undefined:cites.toJSON().map(el=><li key={el}>{el}</li>)}
						</ul>
				</Row>
			</Grid>
		);
	}
}

export default connect((state)=>{
return {
	cit:state.cites
}

},
(dispatch)=>{
	return {
		addCity: (city)=>{
			dispatch(addCity(city))
		},
		removeCity: ()=>{
			dispatch(removeLastCity())
		}
	}
})(App);
