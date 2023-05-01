import React, { FC } from 'react'
import { TabContentProps } from "./TabContent.type";

const TabContent: FC<TabContentProps> = ({ id, activeTab, children }) => {
	return (activeTab === id ? <div>{children}</div> : null);
}

export default TabContent
