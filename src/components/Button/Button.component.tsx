import React, { FC } from "react";
import styled from "styled-components";
import { ButtonProps, ButtonTypes } from "./Button.type";

const StyledButton = styled.button<{ size: string, colorType: string, disabled: boolean, inverted: boolean, buttonType: string }>`
	border-radius: ${props => props.buttonType === 'rectangular' ? '10px' : '25px'};;
	outline: none;
	border: 2px solid;
	padding: 0.5rem 0.75rem;
	font-family: ${props => props.theme.fonts.montserrat.style.fontFamily};
	text-align: center;
	cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
	font-size: ${props => props.theme.dimensions[props.size]}px;
	background-color: ${props => props.disabled ? props.theme.colors.ligthGrey : props.inverted ? props.theme.colors.white : `${props.theme.colors[props.colorType]}CC`};
	border-color: ${props => props.disabled ? `${props.theme.colors.grey}CC` : props.inverted ? props.theme.colors[props.colorType] : props.colorType === 'dark' || 'black' || 'grey' ? props.theme.colors.ligthGrey : props.theme.colors.black};
	color: ${props => props.disabled ? props.theme.colors.dark : props.inverted ? props.theme.colors[props.colorType] : props.colorType === 'dark' || 'black' || 'grey' ? props.theme.colors.white : props.theme.colors.black};
	&:hover {
		box-shadow: ${props => props.disabled ? '' : `0px 3px 8px 2px ${props.theme.colors[props.colorType]}50`};
	}
`;

const Button: FC<ButtonProps> = ({ buttonType = ButtonTypes.rectangular, type = 'primary', size = 'medium', disabled = false, inverted = false, onClick, text, ...props }) => {
	return <StyledButton buttonType={buttonType} colorType={type} size={size} disabled={disabled} inverted={inverted} onClick={onClick} {...props}>{text}</StyledButton>;
}

export default Button;
