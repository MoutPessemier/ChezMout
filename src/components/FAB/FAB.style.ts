import styled from 'styled-components';

export const RoundButton = styled.a<{ disabled: boolean }>`
	border-radius: 100%;
	display: block;
	padding: 0.5rem;
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	&:hover {
		background-color: ${(props) => (props.disabled ? '' : props.theme.colors.primary)};
		cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	}
	background-color: ${(props) => (props.disabled ? `${props.theme.colors.grey}99` : props.theme.colors.dark)};
	color: ${(props) => (props.disabled ? props.theme.colors.lightGrey : props.theme.colors.white)};
	box-shadow: ${(props) => (props.disabled ? '' : `0px 2px 2px ${props.theme.colors.black}`)};
`;
