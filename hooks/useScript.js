import { useCallback, useSyncExternalStore } from 'react';

const findScript = src =>
	Array.from(document.scripts).find(
		script => script.getAttribute('src') === src
	);

function useScript(src) {
	const subscribe = useCallback(
		onStoreChange => {
			if (!src) return () => {};

			let script = findScript(src);
			if (!script) {
				script = document.createElement('script');
				script.src = src;
				script.async = true;
				script.setAttribute('data-status', 'loading');

				// Retain the status for other subscribers and later mounts.
				const setStatus = event => {
					script.setAttribute(
						'data-status',
						event.type === 'load' ? 'ready' : 'error'
					);
				};
				script.addEventListener('load', setStatus);
				script.addEventListener('error', setStatus);
				document.body.appendChild(script);
			}

			const handleStatusChange = event => {
				script.setAttribute(
					'data-status',
					event.type === 'load' ? 'ready' : 'error'
				);
				onStoreChange();
			};
			script.addEventListener('load', handleStatusChange);
			script.addEventListener('error', handleStatusChange);
			return () => {
				script.removeEventListener('load', handleStatusChange);
				script.removeEventListener('error', handleStatusChange);
			};
		},
		[src]
	);

	const getSnapshot = useCallback(
		() =>
			src ? findScript(src)?.getAttribute('data-status') || 'loading' : 'idle',
		[src]
	);
	const getServerSnapshot = useCallback(
		() => (src ? 'loading' : 'idle'),
		[src]
	);

	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useScript;
