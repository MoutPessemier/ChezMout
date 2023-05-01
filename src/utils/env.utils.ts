export class EnvironmentUtils {
	public static isDevelopment = (): boolean =>
		process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_NODE_ENV === 'development';

	public static isProduction = (): boolean =>
		process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_NODE_ENV === 'production';
}
