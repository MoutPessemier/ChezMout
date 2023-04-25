import React, { FC } from 'react';
import { Container } from '@/styles/GeneralStyles';
import Icon from '../Icon/Icon.component';
import { IconNames } from '../Icon/Icon.type';
import { StyledFooter, StyledSpan, SocialMediaLink, StyledLink, CopyrightSpan } from './Footer.style';

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
