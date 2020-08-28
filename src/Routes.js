import React from "react"
import Category from "./Category.js"
import Home from "./Home.js"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { FirebaseContext, Firebase } from "./firebase/index.js"

const Routes = ()=>{

	return(
		<BrowserRouter>
			<Switch>
				<FirebaseContext.Provider value={new Firebase()}>
					<Route exact path="/" component={Home}/>
					<Route path="/categories" component={Category}/>
				</FirebaseContext.Provider>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
