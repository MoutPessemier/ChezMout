import theme, { ColorTypes } from '@/styles/theme';

export const getColorFromEnumValue = (value: ColorTypes): string => {
	return theme.colors[value];
};
