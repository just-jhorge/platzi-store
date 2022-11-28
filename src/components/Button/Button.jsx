import React from "react";

const Button = ({ text, clickHandler, classes }) => {
	return (
		<button className={classes} onClick={clickHandler}>
			{text}
		</button>
	);
};

export default Button;
