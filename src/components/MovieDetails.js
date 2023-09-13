import React, { useState, useEffect } from "react";
import { KEY } from "../api/apiConst";
import StarRating from "./StarRating";
import Loader from "./Loader";

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [userRating, setUserRating] = useState("");

	const {
		Title: title,
		Year: year,
		imdbRating,
		Poster: poster,
		Runtime: runtime,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
		Plot: plot,
	} = movie;

	const isMovieRated = watched.find((movie) => movie.imdbID === selectedId);
	const watchedUserRating = watched.find(
		(movie) => movie.imdbID === selectedId,
	)?.userRating;

	function handleAdd() {
		const newWatchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			userRating,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(" ").at(0)),
		};
		onAddWatched(newWatchedMovie);
		onCloseMovie();
	}

	useEffect(() => {
		async function getMovieDetails() {
			setIsLoading(true);
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
			);

			const data = await res.json();
			setMovie(data);
			setIsLoading(false);
		}
		getMovieDetails();
	}, [selectedId]);

	useEffect(
		function () {
			if (!title) return;
			document.title = `Movie | ${title}`;

			return function () {
				document.title = "My Movie Tracker";
			};
		},
		[title],
	);


	useEffect(function(){
		function callback(e) {
			if (e.code === "Escape") {
				onCloseMovie();
			}
		}
		document.addEventListener("keydown", callback);

		return function() {
			document.removeEventListener("keydown",callback);
		}
	}, [onCloseMovie])

	return (
		<div className="details">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<header>
						<button className="btn-back" onClick={onCloseMovie}>
							&larr;
						</button>
						<img src={poster} alt={`Poster of ${title} movie`} />
						<div className="details-overview">
							<h2>{title}</h2>
							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐</span>
								{imdbRating} IMDb rating
							</p>
						</div>
					</header>
					<section>
						<div className="rating">
							{!isMovieRated ? (
								<>
									<StarRating
										maxRating={10}
										size={24}
										onSetRating={setUserRating}
									/>
									{userRating > 0 && (
										<button
											className="btn-add"
											onClick={handleAdd}>
											+ Add to list
										</button>
									)}
								</>
							) : (
								<p>
									{" "}
									You rated this movie ⭐ {watchedUserRating}
									/10
								</p>
							)}
						</div>
						<p>
							<em>{plot}</em>
						</p>
						<p>
							<b>Starring &nbsp; </b>
							<span className="sc"> {actors}</span>
						</p>
						<p>
							<b>Directed by &nbsp; </b>
							<span className="sc"> {director}</span>
						</p>
						<p>
							<b>Year &nbsp; </b>
							<span className="sc"> {year}</span>
						</p>
					</section>
				</>
			)}
		</div>
	);
};

export default MovieDetails;
