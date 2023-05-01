import styled from 'styled-components';
import { Container } from '@/styles/GeneralStyles';

export const ModalContainer = styled(Container)`
	z-index: 1;
	border-radius: 10px;
	margin: 5% auto;
	box-shadow: ${(props) => `0px 6px 10px 1px ${props.theme.colors.black}55`};
	width: 30%;
	@media (max-width: 1024px) {
		width: 50%;
	}
	@media (max-width: 480px) {
		width: 80%;
	}
`;

export const ModalHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.25em 0.5em;
`;

export const ModalTitle = styled.h3`
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	margin: 0;
`;

export const CloseBtn = styled.span`
	color: ${(props) => props.theme.colors.error};
	font-size: 16pt;
	cursor: pointer;
`;

export const ModalBody = styled.div`
	padding: 0.25em 0.5em;
`;
export const ModalFooter = styled.div`
	padding: 0.5em;
`;
