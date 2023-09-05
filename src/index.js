import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// import App from './App';
import App from "./App-v1";
import StarRating from "./components/StartRating";

function Test() {
	const [movieRating, setMovieRating] = useState(0);

	return (
		<div>
			<StarRating
				size={24}
				defaultRating={3}
				onSetRating={setMovieRating}
				messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
			/>

			<p>This movie was rated {movieRating} stars </p>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating maxRating={10} />
		<Test /> */}
	</React.StrictMode>,
);
