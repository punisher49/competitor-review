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

						<PrivateRoute path="/competitor-review/aeons" exact component={AeonsList} />
						<PrivateRoute path="/competitor-review/carrefours" exact component={CarrefoursList} />
						<PrivateRoute path="/competitor-review/farmers" exact component={FarmersList} />
						<PrivateRoute path="/competitor-review/foodhalls" exact component={FoodhallsList} />
						<PrivateRoute path="/competitor-review/grands" exact component={GrandsList} />
						<PrivateRoute path="/competitor-review/heros" exact component={HerosList} />
						<PrivateRoute path="/competitor-review/primos" exact component={PrimosList} />
						<PrivateRoute path="/competitor-review/ranchos" exact component={RanchsList} />
						<Route path="/login" exact component={Login} />
						<Route path="/signup" exact component={SignUp} />

					</div>
				</Router>
			</AuthProvider>
				)
			}
		}

		export default App;
