import React, { FC, Fragment, useState } from 'react';
import Image from 'next/image';
import styled from "styled-components";
import { HeaderProps } from './Header.type';
import { Container } from '@/styles/GeneralStyles';
import { ColorTypes, SizeTypes } from '@/styles/theme';
import Button from '../Button/Button.component';
import Link from 'next/link';
import Modal from '../Modal/Modal.component';

const LogoDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 0.5rem;
`;

const NameSpan = styled.span`
	font-family: ${props => props.theme.fonts.indieFlower.style.fontFamily};
	font-size: 25px;
	color: ${props => props.theme.colors.white};
`;

const TooltipContainer = styled.div`
	&:hover > div {
		visibility: visible;
	}
`;

const Tooltip = styled.div`
	position: relative;
	bottom: 250px;
	font-size: 30px;
	text-align: center;
	background-color: #fff;
	padding: 10px;
	visibility: hidden;
	&:before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-left: 30px solid transparent;
		border-right: 30px solid transparent;
		border-top: 30px solid #fff;
		top: 50px;
		left: 250px;
	}
`;

const NavList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between ;
	& li {
		list-style-type: none;
		padding: 0 0.5em;
		font-size: 14px;
		font-family: ${props => props.theme.fonts.montserrat.style.fontFamily} ;
		color: ${props => props.theme.colors.white};
	}
`;

const StyledLink = styled(Link)`
	font-family: ${props => props.theme.fonts.montserrat.style.fontFamily} ;
	color: ${props => props.theme.colors.white};
	text-decoration: none;
	margin-right: 0.5rem;
	&:hover {
		color: ${props => props.theme.colors.secondary};
	}

	&:visited {
		color: ${props => props.theme.colors.white};
	}
`;

const Header: FC<HeaderProps> = ({ loggedIn, ...props }) => {
	const [authModalOpen, setAuthModalOpen] = useState(false);
	return (
		<Fragment>
			<Container direction='row' justifyContent='space-between' backgroundColor={ColorTypes.PrimaryLight} style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', marginTop: 0 }}>
				<LogoDiv {...props}>
					{/* <TooltipContainer> */}
					<Image src="/images/Logo.png" alt="ChezMout Logo" width={35} height={35} style={{ marginRight: "0.30em" }} />
					{/* <Tooltip>Oui?</Tooltip>
					</TooltipContainer> */}
					<NameSpan>ChezMout</NameSpan>
				</LogoDiv>
				<Container direction='row'>
					<NavList>
						<li><StyledLink href="/menu">Menu</StyledLink></li>
						{loggedIn && <li><StyledLink href="/reserve">Reserve</StyledLink></li>}
						{loggedIn && <li><StyledLink href="/ratings">Leave a rating</StyledLink></li>}
					</NavList>
					{!loggedIn && <Button text='Log in' onClick={() => setAuthModalOpen(true)} size={SizeTypes.Medium} style={{ maxHeight: '45px', marginRight: '0.5em' }} />}
					{loggedIn && <Button text='Log out' size={SizeTypes.Medium} style={{ maxHeight: '45px', marginRight: '0.5em' }} />}
				</Container>
			</Container>
			{authModalOpen && <Modal modalTitle='Log in / Register' width='75%' closeHandler={setAuthModalOpen} />}
		</Fragment>
	);
}

export default Header;
