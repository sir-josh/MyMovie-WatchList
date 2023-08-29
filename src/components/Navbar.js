import React from "react";
import SearchInput from "./SearchInput";
import NumResults from "./NumResults";
import Logo from "./Logo";

const Navbar = ({ movies }) => {
	return (
		<nav className="nav-bar">
			<Logo />
			<SearchInput />
			<NumResults movies={movies} />
		</nav>
	);
};

export default Navbar;
