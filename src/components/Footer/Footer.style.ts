import styled from 'styled-components';
import Link from 'next/link';

export const StyledFooter = styled.footer`
	background-color: ${(props) => props.theme.colors.dark};
	display: block;
	width: 100%;
	color: ${(props) => props.theme.colors.white};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	min-height: 100px;
`;

export const SocialMediaLink = styled.a`
	color: ${(props) => props.theme.colors.secondary};
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.colors.secondary};
		pointer: cursor;
	}
	&:visited {
		color: ${(props) => props.theme.colors.secondary};
	}
`;

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.colors.secondary};
	text-decoration: none;
	text-align: right;
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	display: flex;
	justify-content: flex-end;
	align-items: center;
	&:hover {
		color: ${(props) => props.theme.colors.secondary};
		pointer: cursor;
	}
	&:visited {
		color: ${(props) => props.theme.colors.secondary};
	}
`;

export const StyledSpan = styled.span`
	color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	margin-left: 0.5rem;
`;

export const CopyrightSpan = styled.span`
	color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	display: block;
	text-align: center;
`;
