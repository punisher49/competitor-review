import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import AeonsList from "./components/AeonsList";
import EditAeon from "./components/EditAeon";
import CreateAeon from "./components/CreateAeon";
// import './components/Search.css';


class App extends React.Component {
	render(){
		return (
			<Router>
				<div className="">
					<Navbar />
					<br />
					<Route path="/aeons" exact component={AeonsList} />
					<Route path="/edit/:id" exact component={EditAeon} />
					<Route path="/carrefours" exact component={CreateAeon} />
				</div>
			</Router>

		)
	}
}

export default App;
