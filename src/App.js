import Sidebar from 'components/Sidebar'
import BottomBar from 'components/BottomBar'
import Content from 'components/Content'
import { BrowserRouter as Router } from "react-router-dom"
import React, { Suspense } from 'react';
import PlayList from './PlayList';
import './App.css';



function App() {
	return (
		<Suspense fallback="loading">
			<Router>
				<div className="wrapper">
					<Sidebar />
					<Content />
					<PlayList />
				</div>
				<BottomBar />
			</Router>
		</Suspense>
	);
}

export default App;
