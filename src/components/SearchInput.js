import { useEffect, useRef } from "react";

const SearchInput = ({ query, setQuery }) => {
	const inputSearchEl = useRef(null);

	useEffect(function () {
		inputSearchEl.current.focus();

		function callback(e) {
			if (document.activeElement === inputSearchEl.current) return;

			if (e.code === "Enter") {
				inputSearchEl.current.focus();
				setQuery("");
			}
		}
		document.addEventListener("keydown", callback);

		return () => document.removeEventListener("keydown", callback);
	}, [setQuery]);

	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			ref={inputSearchEl}
		/>
	);
};

export default SearchInput;
