import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { HashRouter, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import AeonsList from "./components/aeons/AeonsList";
import CarrefoursList from "./components/carrefours/CarrefoursList";
import FarmersList from "./components/farmers/FarmersList";
import FoodhallsList from "./components/foodhalls/FoodhallsList";
import GrandsList from "./components/grands/GrandsList";
import HerosList from "./components/heros/HerosList";
import PrimosList from "./components/primos/PrimosList";
import RanchsList from "./components/ranchs/RanchsList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import {Provider} from 'react-redux';
import store from './store'
import {loadUser} from './actions/authActions'
import PrivateRoute from './components/auth/PrivateRoute'


class App extends React.Component {
	componentDidMount(){
		store.dispatch(loadUser())
	}

	render(){
		return (
			<Provider store={store}>
				<HashRouter basename="/">
					<Navbar />
					<Route exact  path="/" component={Home}/>
					<PrivateRoute path="/aeons" component={AeonsList} />
					<PrivateRoute path="/carrefours" component={CarrefoursList} />
					<PrivateRoute path="/farmers" component={FarmersList} />
					<PrivateRoute path="/foodhalls" component={FoodhallsList} />
					<PrivateRoute path="/grands" component={GrandsList} />
					<PrivateRoute path="/heros" component={HerosList} />
					<PrivateRoute path="/primos" component={PrimosList} />
					<PrivateRoute path="/ranchos" component={RanchsList} />
				</HashRouter>
			</Provider>

		)
	}
}

export default App;
