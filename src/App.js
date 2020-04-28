import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Route, HashRouter} from 'react-router-dom'
import AeonsList from "./components/aeons/AeonsList";
import CarrefoursList from "./components/carrefours/CarrefoursList";
import FarmersList from "./components/farmers/FarmersList";
import FoodhallsList from "./components/foodhalls/FoodhallsList";
import GrandsList from "./components/grands/GrandsList";
import HerosList from "./components/HerosList";
import PrimosList from "./components/PrimosList";
import RanchsList from "./components/ranchs/RanchsList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { AuthProvider } from "./components/auth/Auth";
import PrivateRoute from "./components/auth/PrivateRoute";



class App extends React.Component {
	render(){
		return (
			<AuthProvider>
				<HashRouter>
					<Navbar />
					<PrivateRoute exact  path="/" component={Home}/>
					<Route path="/login" component={Login} />
					<Route path="/signUp" component={SignUp} />
					<PrivateRoute path="/aeons" component={AeonsList} />
					<PrivateRoute path="/carrefours" component={CarrefoursList} />
					<PrivateRoute path="/farmers" component={FarmersList} />
					<PrivateRoute path="/foodhalls" component={FoodhallsList} />
					<PrivateRoute path="/grands" component={GrandsList} />
					<PrivateRoute path="/heros" component={HerosList} />
					<PrivateRoute path="/primos" component={PrimosList} />
					<PrivateRoute path="/ranchos" component={RanchsList} />
				</HashRouter>
			</AuthProvider>
		)
	}
}

export default App;
