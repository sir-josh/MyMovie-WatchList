import React, { useState } from "react";

const SearchInput = () => {
	const [query, setQuery] = useState("");
	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
};

export default SearchInput;
