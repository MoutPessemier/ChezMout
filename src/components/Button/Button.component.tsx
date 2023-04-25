import React, { FC } from "react";
import { StyledButton } from "./Button.style";
import { ButtonProps, ButtonTypes } from "./Button.type";

const Button: FC<ButtonProps> = ({ buttonType = ButtonTypes.rectangular, type = 'primary', size = 'medium', disabled = false, inverted = false, onClick, text, ...props }) => {
	return <StyledButton buttonType={buttonType} colorType={type} size={size} disabled={disabled} inverted={inverted} onClick={onClick} {...props}>{text}</StyledButton>;
}

export default Button;
