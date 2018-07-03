// install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpensesDashboardPage = () => (
	<div>
		This is from my Dashboard Page.
	</div>
);

const AddExpensesPage = () => (
	<div>
		This is my add expenses component.
	</div>
);

const EditExpensesPage = () => (
	<div>
		This is my edit expenses component.
	</div>
);

const HelpExpensesPage = () => (
	<div>
		This is my help expenses component.
	</div>
);

const NotFoundPage = () => (
	<div>
		404! - <Link to="/">Home</Link>
	</div>
);
const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
	</header>
);
const routes = (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/"       component={ExpensesDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensesPage} />
				<Route path="/edit"   component={EditExpensesPage} />
				<Route path="/help"   component={HelpExpensesPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));