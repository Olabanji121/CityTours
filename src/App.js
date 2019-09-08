import React, { Component } from "react";
import "./App.scss";
import Navbar from "./component/NavBar/NavBar";
import TourList from './component/TourList';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<TourList/>
			</React.Fragment>
		)
	}
}

export default App;
