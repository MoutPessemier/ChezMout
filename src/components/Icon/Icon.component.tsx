import React, { FC } from 'react';
import { IconProps, IconSizes } from '@/components/Icon/Icon.type';
import { ICONS } from '@/components/Icon/Icon.const';

const Icon: FC<IconProps> = ({ name, size = IconSizes.Medium, ...props }: IconProps) => {
	const TagName = ICONS[name];
	return <TagName width={size} height={size} preserveAspectRatio="xMidYMid meet" {...props} />;
};

export default Icon;
