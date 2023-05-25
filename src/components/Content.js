import { Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar'

import Home from "views/Home"
import Search from "views/Search"
import Collection from "views/Collection"
import Album from 'views/Album';
import Profil from 'views/Profil';
import Kayıt from 'views/Kayıt';
import GirişYap from 'views/GirişYap';
import Hesapgorunum from 'views/Hesapgorunum';
import Parola from 'views/Parola';
import Profilduzenle from 'views/Profilduzenle';
import Hesapsil from 'views/Hesapsil';
import Dil from 'views/Dil';
import Oturumkapatma from 'views/Oturumkapatma';


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
					<Route path="/Hesapgorunum">
						<Hesapgorunum />
					</Route>
					<Route path="/Profilduzenle">
						<Profilduzenle/>
					</Route>
					<Route path="/Parola">
						<Parola />
					</Route>
					<Route path="/Hesapsil">
						<Hesapsil />
					</Route>
					<Route path="/Dil">
						<Dil />
					</Route>
					<Route path="/Oturumkapatma">
						<Oturumkapatma />
					</Route>
				</Switch>
			</div>
		</main>
	)
}

export default Content