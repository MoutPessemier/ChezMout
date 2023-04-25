import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const CardContainer = styled.div<{ width: number; height?: number }>`
	width: ${(props) => props.width}px;
	height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
	border-radius: 15px;
	box-shadow: ${(props) => `${props.theme.colors.dark}99 0px 3px 8px`};
	box-sizing: border-box;
	margin: 0.5rem;
`;

export const CardImage = styled(Image)<{ width: number }>`
	width: ${(props) => props.width}px;
	height: auto;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

export const CardContent = styled.div`
	width: 100%;
	margin: 0;
	padding: 0.5rem 0;
`;

export const FoodName = styled.span`
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	display: block;
	text-align: center;
	padding: 0 0.25rem;
	margin-bottom: 0.5rem;
	height: 40px;
`;

export const FoodDescription = styled.span`
	font-family: ${(props) => props.theme.fonts.sanchez.style.fontFamily};
	font-size: 12px;
	display: block;
	text-align: center;
	padding: 0 0.25rem;
	height: 45px;
`;

export const CardFooter = styled.div`
	padding: 0 1rem;
	margin-bottom: 0.25rem;
`;

export const FoodLink = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${(props) => props.theme.colors.primary};
	font-family: ${(props) => props.theme.fonts.montserrat.style.fontFamily};
	text-decoration: none;
	&:visited {
		color: ${(props) => props.theme.colors.primary};
	}
`;
