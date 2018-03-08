import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {List} from './components/List';
import {ListItem} from './components/ListItem';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					<List>
						{this.props.items.map((item) => {
							return <ListItem strikeThrough={item.done}>{item.name}</ListItem>
						})}
					</List>
				</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {

	let allItems = Object.values(state.todoItems.items);

	return {
		items: allItems.filter((item) => {
			return state.todoItems.active.indexOf(item.id) > -1;
		}),
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
