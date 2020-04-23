import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AeonsList from "./components/aeons/AeonsList";
import CarrefoursList from "./components/CarrefoursList";
import FarmersList from "./components/farmers/FarmersList";
import FoodhallsList from "./components/FoodhallsList";
import GrandsList from "./components/GrandsList";
import HerosList from "./components/HerosList";
import PrimosList from "./components/PrimosList";
import RanchsList from "./components/RanchsList";
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
				<Router>
					<div className="">
						<Navbar />
						<br />
						<Route exact  path="/competitor-review/" component={Home}/>

						<PrivateRoute path="/aeons" exact component={AeonsList} />
						<PrivateRoute path="/carrefours" exact component={CarrefoursList} />
						<PrivateRoute path="/farmers" exact component={FarmersList} />
						<PrivateRoute path="/foodhalls" exact component={FoodhallsList} />
						<PrivateRoute path="/grands" exact component={GrandsList} />
						<PrivateRoute path="/heros" exact component={HerosList} />
						<PrivateRoute path="/primos" exact component={PrimosList} />
						<PrivateRoute path="/ranchos" exact component={RanchsList} />
						<Route path="/login" exact component={Login} />
						<Route path="/signup" exact component={SignUp} />

					</div>
				</Router>
			</AuthProvider>
				)
			}
		}

		export default App;
