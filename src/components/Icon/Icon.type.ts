import { SVGProps } from 'react';

export enum IconNames {
	Edit = 'Edit',
	Profile = 'Profile',
	Search = 'Search',
	Send = 'Send',
	Star = 'Star',
	Facebook = 'facebook',
	Instagram = 'instagram',
	LinkedIn = 'linkedin',
	Twitter = 'twitter',
	YouTube = 'youtube',
	ArrowRight = 'Arrow_right',
	Menu = 'Menu',
	Calendar = 'Calendar',
}

export enum IconSizes {
	Tiny = 12,
	Small = 16,
	Medium = 24,
	Large = 32,
	Huge = 48,
}

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconNames;
	size?: IconSizes;
}
