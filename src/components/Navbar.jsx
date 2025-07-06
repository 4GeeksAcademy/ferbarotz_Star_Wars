import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light font-monospace">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="" width="100" /></span>
				</Link>
				<div className="ml-auto">
					<div class="btn-group" role="group">
						<button
							type="button"
							class="btn btn-primary dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							FAVORITES <span className="badge rounded-pill bg-secondary">
							{store.navesFav.length + store.planetsFav.length + store.peoplesFav.length}</span>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#">
								<div>
									{store.navesFav.map((nave, index) => <p key={index}>{nave}</p>)}
								</div>
								<div>
									{store.planetsFav.map((planet, index) => <p key={index}>{planet}</p>)}
								</div>
								<div>
									{store.peoplesFav.map((people, index) => <p key={index}>{people}</p>)}
								</div>
							</a></li>
						</ul>
					</div>



				</div>
			</div>
		</nav >
	);
};
