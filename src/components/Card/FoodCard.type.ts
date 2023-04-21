import { HTMLAttributes } from 'react';
import { IconNames } from '../Icon/Icon.type';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	width: number;
	height?: number;
	imgSrc: string;
	imgAlt: string;
	foodName: string;
	foodDesc: string;
	foodId: number;
	foodFooterText?: string;
	foodFooterIcon?: IconNames;
}
