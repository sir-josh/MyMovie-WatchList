import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import SearchInput from "./components/SearchInput";
import NumResults from "./components/NumResults";
import ListMovieBox from "./components/ListMovieBox";
import MovieList from "./components/MovieList";
import WatchedMovieList from "./components/WatchedMovieList";
import MovieSummary from "./components/MovieSummary";

const tempMovieData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt0133093",
		Title: "The Matrix",
		Year: "1999",
		Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt6751668",
		Title: "Parasite",
		Year: "2019",
		Poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
];

const tempWatchedData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
		runtime: 148,
		imdbRating: 8.8,
		userRating: 10,
	},
	{
		imdbID: "tt0088763",
		Title: "Back to the Future",
		Year: "1985",
		Poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		runtime: 116,
		imdbRating: 8.5,
		userRating: 9,
	},
];

const KEY = "3f3bca4f";

export default function App() {
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState(tempWatchedData);

	useEffect(function () {
		fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
			.then((res) => res.json())
			.then((data) => setMovies(data.Search));
	}, []);

	return (
		<>
			<Navbar>
				<Logo />
				<SearchInput />
				<NumResults movies={movies} />
			</Navbar>
			<Main>
				<ListMovieBox>
					<MovieList movies={movies} />
				</ListMovieBox>

				<ListMovieBox>
					<MovieSummary watched={watched} />
					<WatchedMovieList watched={watched} />
				</ListMovieBox>
			</Main>
		</>
	);
}