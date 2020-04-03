import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import AeonsList from "./components/AeonsList";


class App extends React.Component {
	render(){
		return (
			<Router>
				<div className="">
					<Navbar />
					<br />
					<Route path="/aeons" exact component={AeonsList} />
				</div>
			</Router>

		)
	}
}

export default App;
