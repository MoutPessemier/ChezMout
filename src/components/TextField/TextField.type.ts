import { HTMLAttributes } from 'react';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	placeholder?: string;
	error?: string;
	required?: boolean;
	disabled?: boolean;
	width?: number;
	height?: number;
	type?: string;
	onBlur?: any;
	onChange?: any;
	value?: string | number;
}
