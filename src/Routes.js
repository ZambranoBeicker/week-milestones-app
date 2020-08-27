import React from "react"
import Category from "./Category.js"
import Home from "./Home.js"
import { BrowserRouter, Switch, Route } from "react-router-dom"

const Routes = ()=>{

	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/categories" component={Category}/>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
