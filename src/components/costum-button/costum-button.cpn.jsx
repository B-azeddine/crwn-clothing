import React from "react";
import "./costum-button.styles.scss";

const CustomButton = ({children, ...otherProps}) =>(
	<button className="custom-button" {...otherProps}>
	{children}
	</button>
)
export default CustomButton;