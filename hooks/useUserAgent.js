import { useMemo, useSyncExternalStore } from 'react';
import UAParser from 'ua-parser-js';

const subscribe = () => () => {};
const getSnapshot = () => window.navigator.userAgent;
const getServerSnapshot = () => null;

const useUserAgent = () => {
	const userAgent = useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot
	);

	return useMemo(() => {
		if (userAgent === null) return null;

		try {
			const uaParser = new UAParser.UAParser();
			uaParser.setUA(userAgent);
			return {
				os: uaParser.getOS(),
				browser: uaParser.getBrowser(),
				cpu: uaParser.getCPU(),
				device: uaParser.getDevice(),
				engine: uaParser.getEngine()
			};
		} catch {
			return null;
		}
	}, [userAgent]);
};

export default useUserAgent;
