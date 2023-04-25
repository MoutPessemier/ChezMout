import styled from 'styled-components';
import Link from 'next/link';

export const LogoDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 0.5rem;
`;

export const NameSpan = styled.span`
	font-family: ${(props) => props.theme.fonts.indieFlower.style.fontFamily};
	font-size: 25px;
	color: ${(props) => props.theme.colors.white};
`;

export const NavList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	& li {
		list-style-type: none;
		padding: 0 0.5em;
		font-size: 14px;
		font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
		color: ${(props) => props.theme.colors.white};
	}
`;

export const StyledLink = styled(Link)`
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	color: ${(props) => props.theme.colors.white};
	text-decoration: none;
	margin-right: 0.5rem;
	&:hover {
		color: ${(props) => props.theme.colors.secondary};
	}

	&:visited {
		color: ${(props) => props.theme.colors.white};
	}
`;
