declare module '*.svg' {
	import { FC, SVGAttributes } from 'react';

	const value: FC<SVGAttributes<SVGElement>>;
	export default value;
}

declare namespace globalThis {
	interface Window {
		dataLayer: Record<string, string>[];
	}
}
