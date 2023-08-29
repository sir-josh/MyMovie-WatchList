import React from "react";
import ListMovieBox from "./ListMovieBox";
import WatchedMovieBox from "./WatchedMovieBox";

const Main = ({ movies, setMovies, watched, setWatched }) => {
	return (
		<main className="main">
			<ListMovieBox movies={movies} />
			<WatchedMovieBox watched={watched} />
		</main>
	);
};

export default Main;
