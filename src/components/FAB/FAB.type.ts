import { HTMLAttributes, ReactNode } from 'react';
import { IconNames, IconSizes } from '../Icon/Icon.type';

export interface FABProps extends HTMLAttributes<HTMLAnchorElement> {
	iconName: IconNames;
	iconSize: IconSizes;
	disabled?: boolean;
}
