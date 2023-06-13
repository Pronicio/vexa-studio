import { postWebhook, readRequestBody, testData } from '../utils.js'
import { corsHeaders } from "../index.js";

/**
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export default async function (request) {
    if (request.method !== "POST") return new Response("The request must be a POST");

    const reqBody = await readRequestBody(request);
    if (!reqBody) return new Response("The body is empty", { status: 500 });

    const good = testData(reqBody);
    if (!good) return new Response("Invalid Data", { status: 500 });

    const userAvatar = `https://api.dicebear.com/6.x/micah/png?seed=${reqBody.username.replace(/ /, '')}`

    const body = {
        name: reqBody.username,
        avatar: userAvatar,
        allowed_mentions: {
            parse: [ 'users', 'roles' ],
        },
        embeds: [ {
            color: 455804,
            author: {
                name: `${reqBody.username} ${reqBody.surname}`,
                url: `https://vexastudio.com`,
                icon_url: userAvatar,
            },
            title: `Nouveau Message`,
            description: `<:info:1059983684855414784>・Objet : ${reqBody.object} \n<:text:1064002116986867772>・Message : ${reqBody.message}`,
            fields: [
                {
                    name: '<:contact:1059131491646459985>・Email :',
                    value: reqBody.email,
                }
            ],
            timestamp: new Date().toISOString(),
            footer: `©️ Vexa Studio 2023. - Tous droits réservés.`
        } ],
    }

    const webhook = await postWebhook(body)
    if (!webhook) return new Response("Error on webhook", { status: 500 });

    const res = new Response("Success !");
    for (const header in corsHeaders) {
        res.headers.set(header, corsHeaders[header])
    }

    return res
}
