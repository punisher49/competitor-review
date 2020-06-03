import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route } from "react-router-dom";
import AeonsList from "./components/aeons/AeonsList";
import CarrefoursList from "./components/carrefours/CarrefoursList";
import FarmersList from "./components/farmers/FarmersList";
import FoodhallsList from "./components/foodhalls/FoodhallsList";
import GrandsList from "./components/grands/GrandsList";
import HerosList from "./components/heros/HerosList";
import PrimosList from "./components/primos/PrimosList";
import RanchsList from "./components/ranchs/RanchsList";
import Home from "./Home";
import Competitors from "./components/competitors/Competitors";
import Indonesia from "./components/competitors/Indonesia";
import InsightsCountries from "./components/insights/InsightsCountries";
import IndonesiaInsights from "./components/insights/IndonesiaInsights";
import IndonesiaBabyFoodInsights from "./components/insights/IndonesiaBabyFoodInsights";
import ExportTraining from "./components/training/ExportTraining";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import PrivateRoute from "./components/auth/PrivateRoute";

import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

const history = createBrowserHistory();
ReactGA.initialize("UA-167540439-1");
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
  console.log(location.pathname);
});

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store} history={history}>
        <HashRouter basename="/">
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/aeons" component={AeonsList} />
          <PrivateRoute path="/carrefours" component={CarrefoursList} />
          <PrivateRoute path="/farmers" component={FarmersList} />
          <PrivateRoute path="/foodhalls" component={FoodhallsList} />
          <PrivateRoute path="/grands" component={GrandsList} />
          <PrivateRoute path="/heros" component={HerosList} />
          <PrivateRoute path="/primos" component={PrimosList} />
          <PrivateRoute path="/ranchos" component={RanchsList} />
          <PrivateRoute path="/competitors" component={Competitors} />
          <PrivateRoute path="/indonesia" component={Indonesia} />

          <PrivateRoute
            path="/insightscountries"
            component={InsightsCountries}
          />
          <PrivateRoute
            path="/indonesiababyfoodinsights"
            component={IndonesiaBabyFoodInsights}
          />
          <PrivateRoute
            path="/indonesiainsights"
            component={IndonesiaInsights}
          />

          <PrivateRoute path="/exporttraining" component={ExportTraining} />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
