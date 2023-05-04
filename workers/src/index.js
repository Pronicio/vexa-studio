import form from './router/form.js'

export default {
	/**
	 * @param {Request} req
	 * @returns {Promise<Response>}
	 */
	async fetch(req) {
		let url = new URL(req.url);
		let path = url.pathname.replace(/[/]$/, '');

		switch (path) {
			case '/form': {
				return form(req);
			}
			default: {
				return new Response('Not found', { status: 404 });
			}
		}
	},
};
