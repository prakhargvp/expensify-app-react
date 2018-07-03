import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpensesDashboardPage from './../components/ExpensesDashboardPage';
import AddExpensesPage from './../components/AddExpensesPage';
import EditExpensesPage from './../components/EditExpensesPage';
import HelpExpensesPage from './../components/HelpExpensesPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/"       component={ExpensesDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensesPage} />
				<Route path="/edit/:id"   component={EditExpensesPage} />
				<Route path="/help"   component={HelpExpensesPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;