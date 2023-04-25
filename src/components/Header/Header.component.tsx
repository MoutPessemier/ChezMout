import React, { FC, Fragment, useState } from 'react';
import Image from 'next/image';
import { HeaderProps } from './Header.type';
import { Container } from '@/styles/GeneralStyles';
import { ColorTypes, SizeTypes } from '@/styles/theme';
import Button from '../Button/Button.component';
import Modal from '../Modal/Modal.component';
import { LogoDiv, NameSpan, NavList, StyledLink } from './Header.style';

const Header: FC<HeaderProps> = ({ loggedIn, ...props }) => {
	const [authModalOpen, setAuthModalOpen] = useState(false);
	return (
		<Fragment>
			<Container direction='row' justifyContent='space-between' backgroundColor={ColorTypes.PrimaryLight} style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', marginTop: 0 }}>
				<LogoDiv {...props}>
					<Image src="/images/Logo.png" alt="ChezMout Logo" width={35} height={35} style={{ marginRight: "0.30em" }} />
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
