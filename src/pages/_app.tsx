import React, { FC } from 'react';
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from "styled-components"
import theme from '@/styles/theme';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider >
	);
};

export default appWithTranslation(App);

