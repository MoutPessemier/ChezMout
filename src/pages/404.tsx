import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import styled from "styled-components";

const Title = styled.div`
	font-size: 24px;
`;

const NotFoundPage: FC = () => {
	const { t } = useTranslation('common');
	return <Title>
		{t('general.404.title')}
	</Title>;
};

export default NotFoundPage;
