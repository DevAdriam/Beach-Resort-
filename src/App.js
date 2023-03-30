import React from "react";
import Activities from "./Components/Activities";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TopBar from "./Components/TopBar";

const App = () => {
	return (
		<div>
			<TopBar />
			<Navbar />
			<Hero />
			<Activities />
		</div>
	);
};

export default App;
