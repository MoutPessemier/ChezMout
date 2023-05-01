import React, { FC, useState } from "react";
import TabNavItem from "./TabNavItem.component";
import TabContent from "./TabContent.component";
import Loginform from "@/forms/Login";
import RegisterForm from "@/forms/Register";
import { ContentDiv, TabNavUl } from "./Tabs.style";

const LoginTabs: FC = () => {
	const [activeTab, setActiveTab] = useState(0);

	return <div>
		<TabNavUl>
			<TabNavItem title="Login" id={0} activeTab={activeTab} setActiveTab={setActiveTab} />
			<TabNavItem title="Register" id={1} activeTab={activeTab} setActiveTab={setActiveTab} />
		</TabNavUl>

		<ContentDiv>
			<TabContent id={0} activeTab={activeTab} children={<Loginform />} />
			<TabContent id={1} activeTab={activeTab} children={<RegisterForm />} />
		</ContentDiv>
	</div>
}

export default LoginTabs;
