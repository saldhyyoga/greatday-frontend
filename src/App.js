import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import Gueslist from "./pages/Guest";
import FindGuest from "./pages/Guest/FindGuest";

function App() {
	return (
		<Router>
			{/* <Navbar />
      <Photos /> */}
			<Switch>
				{/* <Route exact path="/" component={Navbar} /> */}
				<Route exact path="/" component={Registrasi} />
				<Route exact path="/users" />
				<Route exact path="/login" component={Login} />
				<Route exact path="/guest-list" component={Gueslist} />
				<Route exact path="/find-guest" component={FindGuest} />
			</Switch>
		</Router>
	);
}

export default App;
