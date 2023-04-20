import { HTMLAttributes, MouseEventHandler } from 'react';
import { ColorTypes, SizeTypes } from '@/styles/theme';

export enum ButtonTypes {
	rounded = 'rounded',
	rectangular = 'rectangular',
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	buttonType?: ButtonTypes;
	type?: ColorTypes;
	size?: SizeTypes;
	disabled?: boolean;
	inverted?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	text: string;
}
