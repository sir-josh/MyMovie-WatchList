import React from "react";

const ErrorMessage = ({ message }) => {
	return (
		<p className="error">
			<span>📛</span> {message}
			{/* <a target="_blank" href="https://icons8.com/icon/7703/cancel">
				Cancel
			</a>{" "}
			icon by{" "}
			<a target="_blank" href="https://icons8.com">
				Icons8
			</a> */}
		</p>
	);
};

export default ErrorMessage;
