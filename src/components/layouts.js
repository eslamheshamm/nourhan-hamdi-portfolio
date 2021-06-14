import React from "react";
import NavBar from "./navbar";
const Layouts = (props) => {
	const { children } = props;
	return (
		<main className="relative min-h-screen pb-24">
			<NavBar />
			<div>{children}</div>
			<footer className="absolute bottom-0 text-center w-full">
				<div className="flex justify-center items-center w-full">
					<p className="text-center mb-8 font-Neue text-xl text-[#250031]">
						Nourhan Hamdii
					</p>
				</div>
			</footer>
		</main>
	);
};
export default Layouts;
