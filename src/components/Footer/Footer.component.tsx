import React, { FC } from 'react';
import { Container } from '@/styles/GeneralStyles';
import Icon from '../Icon/Icon.component';
import { IconNames, IconSizes } from '../Icon/Icon.type';
import { StyledFooter, StyledSpan, SocialMediaLink, StyledLink, CopyrightSpan } from './Footer.style';

const Footer: FC = () => {
	return <StyledFooter>
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
				<StyledLink href='/menu'>Check the menu <Icon name={IconNames.Menu} size={IconSizes.Small} style={{ marginLeft: '0.25em' }} /></StyledLink>
				<StyledLink href='/reserve'>Reserve a spot <Icon name={IconNames.Calendar} size={IconSizes.Small} style={{ marginLeft: '0.25em' }} /></StyledLink>
				<StyledLink href='/rating'>Leave a rating <Icon name={IconNames.Star} size={IconSizes.Small} style={{ marginLeft: '0.25em' }} /></StyledLink>
			</Container>
		</Container>
		<CopyrightSpan>{new Date().getFullYear()} - &copy; Mout Pessemier</CopyrightSpan>
	</StyledFooter>;
}

export default Footer;
