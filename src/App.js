import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route, HashRouter} from 'react-router-dom'
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


class App extends React.Component {
	componentDidMount(){
		store.dispatch(loadUser())
	}
	render(){
		return (
			<Provider store={store}>
				<HashRouter>
					<Navbar />
					<Route exact  path="/" component={Home}/>
					<Route path="/aeons" component={AeonsList} />
					<Route path="/carrefours" component={CarrefoursList} />
					<Route path="/farmers" component={FarmersList} />
					<Route path="/foodhalls" component={FoodhallsList} />
					<Route path="/grands" component={GrandsList} />
					<Route path="/heros" component={HerosList} />
					<Route path="/primos" component={PrimosList} />
					<Route path="/ranchos" component={RanchsList} />
				</HashRouter>
			</Provider>
		)
	}
}

export default App;
