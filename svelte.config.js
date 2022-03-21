import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				{
					name: 'bicycle-server',
					configureServer(server) {
						const ws = server.ws;

						// console.log(ws);
						ws.on('connection', ws => {
							console.log(ws);
						});
					}
				}
			]
		}
	}
};

export default config;
