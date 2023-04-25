import React, { FC } from 'react';
import Icon from '../Icon/Icon.component';
import { FABProps } from './FAB.type';
import { RoundButton } from './FAB.style';

const FAB: FC<FABProps> = ({ disabled = false, iconName, iconSize, ...props }) => {
	return <RoundButton disabled={disabled} {...props} ><Icon name={iconName} size={iconSize} /></RoundButton>
}

export default FAB;
