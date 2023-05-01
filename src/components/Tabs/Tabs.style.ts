import styled from 'styled-components';

export const TabNavUl = styled.ul`
	list-style: none;
	padding: 0;
	display flex;
	justify-content: space-around;
    align-items: center;
`;

export const TabNavLi = styled.li<{ active: boolean }>`
	border-bottom: ${(props) => (props.active ? `1px solid ${props.theme.colors.primary}` : '0px')};
	font-size: 24px;
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	width: 100px;
	text-align: center;
`;

export const ContentDiv = styled.div`
	display: flex;
	justify-content: center;
`;
