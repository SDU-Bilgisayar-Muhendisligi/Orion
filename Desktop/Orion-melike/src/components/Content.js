import { Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar'

import Home from "views/Home"
import Search from "views/Search"
import Collection from "views/Collection"
import Album from 'views/Album';
import Profil from 'views/Profil';
import Kayıt from 'views/Kayıt';
import GirişYap from 'views/GirişYap';


function Content() {
	return (
		<main className="flex-auto overflow-auto">
			<Navbar />
			<div className="px-8 py-5">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/collection">
						<Collection />
					</Route>
					<Route path="/album">
						<Album />
					</Route>
					<Route path="/profil">
						<Profil />
					</Route>
					<Route path="/kayıt">
						<Kayıt />
					</Route>
					<Route path="/girişyap">
						<GirişYap />
					</Route>
				</Switch>
			</div>
		</main>
	)
}

export default Content