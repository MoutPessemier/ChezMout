import styled from "styled-components";
import { ColorTypes } from './theme';

export const Container = styled.div<{ direction: string, justifyContent?: string, alignItems?: string, width?: string, height?: string, backgroundColor?: ColorTypes, borderColor?: ColorTypes }>`
	display: flex;
	flex-direction: ${props => props.direction};
	justify-content: ${props => props.justifyContent ? props.justifyContent : 'unset'};
	align-items: ${props => props.alignItems ? props.alignItems : 'unset'};
	width: ${props => props.width ? `${props.width}` : 'auto'};
	height: ${props => props.height ? `${props.height}` : 'auto'};
	margin: 0.2em 0;
	background-color: ${props => props.backgroundColor ? props.theme.colors[props.backgroundColor] : 'transparent'};
	border: ${props => props.borderColor ? `1px solid ${props.theme.colors[props.borderColor]}` : ''};
`;

export const ErrorMessage = styled.span<{ error: string }>`
	color: ${props => props.theme.colors.error};
	visibility: ${props => props.error ? 'visible' : 'hidden'};
`;

export const RequiredTag = styled.span`
	color: ${props => props.theme.colors.error};
	font-size: 12px;
	vertical-align: text-top;
`;
