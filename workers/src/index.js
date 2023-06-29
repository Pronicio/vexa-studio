import form from './router/form.js'

export const corsHeaders = {
	"Access-Control-Allow-Origin": "https://vexa-studio.vercel.app",
	"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
	"Access-Control-Max-Age": "86400",
};

export default {
	/**
	 * @param {Request} req
	 * @returns {Promise<Response>}
	 */
	async fetch(req) {
		let url = new URL(req.url);
		let path = url.pathname.replace(/[/]$/, '');

		if (req.method === "OPTIONS") {
			return handleOptions(req);
		}

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

function handleOptions(req) {
	if (
		req.headers.get("Origin") !== null &&
		req.headers.get("Access-Control-Request-Method") !== null &&
		req.headers.get("Access-Control-Request-Headers") !== null
	) {
		return new Response(null, {
			headers: {
				...corsHeaders,
				"Access-Control-Allow-Headers": req.headers.get(
					"Access-Control-Request-Headers"
				),
			},
		});
	} else {
		return new Response(null, {
			headers: {
				Allow: "GET, HEAD, POST, OPTIONS",
			},
		});
	}
} 
