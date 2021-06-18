import React from "react";
import { Link } from "gatsby";
const NavBar = () => {
	return (
		<nav className="flex justify-between items-center pt-5 pb-8 w-11/12 mx-auto sticky top-0 z-50">
			<ul className="flex flex-col md:flex-row">
				<li className="uppercase mr-6">
					<Link to="/info">info </Link>
				</li>
				<li className="uppercase">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Insta
					</a>
				</li>
			</ul>
			<h2 className="text-3xl w-full md:text-5xl text-center  font-Guyot">
				<Link to="/">Nourhan Hamdii </Link>
			</h2>
			<ul className="flex flex-col md:flex-row">
				<li className="uppercase mr-6">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Gallery
					</a>
				</li>
				<li className="uppercase">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Artists
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
