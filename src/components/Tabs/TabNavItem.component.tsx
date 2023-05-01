import React, { FC } from "react";
import { TabNavItemProps } from "./TabNavItem.type";
import { TabNavLi } from "./Tabs.style";

const TabNavItem: FC<TabNavItemProps> = ({ id, activeTab, title, setActiveTab }) => {

	const onClickHandler = () => {
		setActiveTab(id);
	}

	return (
		<TabNavLi onClick={onClickHandler} active={activeTab === id}>
			{title}
		</TabNavLi>
	);
}

export default TabNavItem
