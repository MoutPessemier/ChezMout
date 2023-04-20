/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ },
				use: ['@svgr/webpack'],
			},
		);
		fileLoaderRule.exclude = /\.svg$/i;
		return config;
	},
	reactStrictMode: true,
	i18n,
	compiler: {
		styledComponents: true,
	},
};
