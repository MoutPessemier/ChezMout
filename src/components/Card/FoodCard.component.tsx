import React, { FC } from "react";
import Image from 'next/image'
import styled from "styled-components";
import { CardProps } from "./FoodCard.type";
import Icon from "../Icon/Icon.component";
import { IconNames } from "../Icon/Icon.type";
import Link from "next/link";

const CardContainer = styled.div<{ width: number, height?: number }>`
	width: ${props => props.width}px;
	height: ${props => props.height ? `${props.height}px` : "auto"};
	border-radius: 15px;
	box-shadow:${props => `${props.theme.colors.dark}99 0px 3px 8px`};
	box-sizing: border-box;
	margin: 0.5rem;
`;

const CardImage = styled(Image) <{ width: number }>`
	width: ${props => props.width}px;
	height: auto;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

const CardContent = styled.div`
	width: 100%;
	margin: 0;
	padding: 0.5rem 0;
`;

const FoodName = styled.span`
	font-family: ${props => props.theme.fonts.montserrat.style.fontFamily};
	display: block;
	text-align: center;
	padding: 0 0.25rem;
	margin-bottom: 0.5rem;
	height: 40px;
`;

const FoodDescription = styled.span`
	font-family: ${props => props.theme.fonts.sanchez.style.fontFamily};
	font-size: 12px;
	display: block;
	text-align: center;
	padding: 0 0.25rem;
	height: 45px;
`;

const CardFooter = styled.div`
	padding: 0 1rem;
    margin-bottom: 0.25rem;
`;

const FoodLink = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${props => props.theme.colors.primary};
	font-family: ${props => props.theme.fonts.montserrat.style.fontFamily};
	text-decoration: none;
	&:visited {
		color: ${props => props.theme.colors.primary};
	}
`;

const FoodCard: FC<CardProps> = ({ width, height, imgSrc, imgAlt, foodName, foodId, foodDesc, foodFooterText, foodFooterIcon, ...props }) => {
	return <CardContainer width={width} height={height}>
		<CardImage width={width} height={width} src={imgSrc} alt={imgAlt} />
		<CardContent>
			<FoodName>{foodName}</FoodName>
			<FoodDescription>{foodDesc}</FoodDescription>
		</CardContent>
		<CardFooter>
			<FoodLink href={`/food/${foodId}`} >
				{foodFooterText && <span>{foodFooterText}</span>}
				{foodFooterIcon && <Icon name={foodFooterIcon} />}
			</FoodLink>
		</CardFooter>
	</CardContainer>;
}

export default FoodCard;
