import React, { useState, useEffect } from "react";
import { KEY } from "../api/apiConst";
import StarRating from "./StarRating";
import Loader from "./Loader";

const MovieDetails = ({ selectedId, onCloseMovie }) => {
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);

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
								{" "}
								{released} &bull; {runtime}{" "}
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
							<StarRating maxRating={10} size={24} />
						</div>
						<p>
							<em>{plot}</em>
						</p>
						<p>
							<b>Starring &nbsp;  </b>
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
