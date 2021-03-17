import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Content/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PhoneBook from "./components/PhoneBook/PhoneBook";

const Routes = () => {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/phonebook' component={PhoneBook} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
};

export default Routes;
