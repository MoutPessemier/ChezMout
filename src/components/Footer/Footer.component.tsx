import { Container } from '@/styles/GeneralStyles';
import React, { FC } from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon.component';
import { IconNames } from '../Icon/Icon.type';
import Link from 'next/link';

const StyledFooter = styled.footer`
	background-color: ${props => props.theme.colors.dark};
	display: block;
	width: 100%;
	color: ${props => props.theme.colors.white};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const SocialMediaLink = styled.a`
	color: ${props => props.theme.colors.secondary};
	text-decoration: none;
	&:hover {
		color: ${props => props.theme.colors.secondary};
		pointer: cursor;
	}
	&:visited {
		color: ${props => props.theme.colors.secondary};
	}
`;

const StyledLink = styled(Link)`
	color: ${props => props.theme.colors.secondary};
	text-decoration: none;
	text-align: right;
	font-family: ${props => props.theme.fonts.montserrat.style.fontFamily};
	&:hover {
		color: ${props => props.theme.colors.secondary};
		pointer: cursor;
	}
	&:visited {
		color: ${props => props.theme.colors.secondary};
	}
`;

const StyledSpan = styled.span`
	color: ${props => props.theme.colors.secondary};
	font-family: ${props => props.theme.fonts.montserrat.style.fontFamily};
	margin-left: 0.5rem;
`;

const CopyrightSpan = styled.span`
	color: ${props => props.theme.colors.secondary};
	font-family: ${props => props.theme.fonts.montserrat.style.fontFamily};
	display: block;
	text-align: center;
`;

const Footer: FC = ({ ...props }) => {
	return <StyledFooter {...props}>
		<Container direction='row' justifyContent='space-between' alignItems='flex-end' style={{ padding: '0.25em' }}>
			<Container direction='column'>
				<StyledSpan>Check out social media</StyledSpan>
				<Container direction='row'>
					<SocialMediaLink href='https://www.instagram.com/moutpessemier/' target='_blank'><Icon name={IconNames.Instagram} style={{ marginLeft: '0.5rem' }} /></SocialMediaLink>
					<SocialMediaLink href='https://twitter.com/MoutPessemier' target='_blank'><Icon name={IconNames.Twitter} style={{ marginLeft: '0.5rem' }} /></SocialMediaLink>
					<SocialMediaLink href='https://www.linkedin.com/in/moutpessemier/' target='_blank'><Icon name={IconNames.LinkedIn} style={{ marginLeft: '0.5rem' }} /></SocialMediaLink>
				</Container>
			</Container>
			<Container direction='column' style={{ marginRight: '0.5rem' }}>
				<StyledLink href='/menu'>Check the menu</StyledLink>
				<StyledLink href='/reserve'>Reserve a spot</StyledLink>
				<StyledLink href='/rating'>Leave a rating</StyledLink>
			</Container>
		</Container>
		<CopyrightSpan>{new Date().getFullYear()} - &copy; Mout Pessemier</CopyrightSpan>
	</StyledFooter>;
}

export default Footer;
