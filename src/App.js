
import Sidebar from 'components/Sidebar'
import BottomBar from 'components/BottomBar'
import Content from 'components/Content'
import { BrowserRouter as Router } from "react-router-dom"
import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";



function App() {
 
	return (
		<Router>
			<div className="wrapper">
				<Sidebar/>
				<Content/>
			</div>
			<BottomBar/>
		</Router>
		
		
	);
	
}


export default App;
