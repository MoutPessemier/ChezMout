import { ReactNode } from 'react';

export interface TabContentProps {
	id: number;
	activeTab: number;
	children: ReactNode;
}
