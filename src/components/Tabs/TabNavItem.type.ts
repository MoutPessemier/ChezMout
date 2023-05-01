export interface TabNavItemProps {
	id: number;
	activeTab: number;
	title: string;
	setActiveTab: (id: number) => void;
}
