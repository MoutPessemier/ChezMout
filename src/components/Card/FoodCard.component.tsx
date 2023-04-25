import React, { FC } from "react";
import { CardProps } from "./FoodCard.type";
import Icon from "../Icon/Icon.component";
import { CardContainer, CardImage, CardContent, FoodName, FoodDescription, CardFooter, FoodLink } from "./FoodCard.style";

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
