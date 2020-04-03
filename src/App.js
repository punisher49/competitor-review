import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import AeonsList from "./components/AeonsList";
import CarrefoursList from "./components/CarrefoursList";
import FarmersList from "./components/FarmersList";
import FoodhallsList from "./components/FoodhallsList";


class App extends React.Component {
	render(){
		return (
			<Router>
				<div className="">
					<Navbar />
					<br />
					<Route path="/aeons" exact component={AeonsList} />
					<Route path="/carrefours" exact component={CarrefoursList} />
					<Route path="/farmers" exact component={FarmersList} />
					<Route path="/foodhalls" exact component={FoodhallsList} />
				</div>
			</Router>

		)
	}
}

export default App;
