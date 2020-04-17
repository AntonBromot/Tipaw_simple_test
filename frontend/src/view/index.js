import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES_MAP } from "../constants/RouterMap";
import "../styles/main.scss";
import MainHeader from "./components/MainHeader"

const allRoutes = ROUTES_MAP.map(({ path, component }, key) => <Route exact { ...{ path, component, key } } />)

const Application = () => (
	<div className="application">
		<MainHeader />
		<div className="main">
			<Switch>{ allRoutes }</Switch>
		</div>
	</div>
)

export default Application

