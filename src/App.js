import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
export class Corn extends Component {
	render() {
		return (
		<div> Hi!</div>
		);
	}
}
export class Dice extends Component {
	constructor(props) {
		super(props);
		this.state = {roll:""};
	}
	roll = () => {
		this.setState({roll: Math.floor((Math.random() * 20) + 1)}); 
	}
	render() {
		return (
		<div> 
		<div onClick={this.roll}>Click Me</div>
		Are you feeling lucky? Roll the dice... {this.state.roll}
		</div>
		);
	}
}
class Spam extends Component {
	render() {
		return (
		<div>Hello!</div>
		);
	}
}
class Eggs extends Component {
	render() {
		return (
		<div>How Goes It?</div>
		);
	}
}
export class App extends Component {
  render() {
	  let i=1;
    return (
      <div className="App">
	  <Corn seed={i}></Corn>
	  <Spam></Spam>
	  <Eggs></Eggs>
      </div>
    );
  }
}

export default App;
