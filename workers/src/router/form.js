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

    const userAvatar = `https://media.discordapp.net/attachments/1055255734440435815/1124794303307321354/user-avatar.png?width=168&height=168`

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
                url: `https://www.google.com/search?q=${reqBody.username.replace(/ /, '')}`,
                icon_url: userAvatar,
            },
            description: `<:folder:1059178516295450774>・**Objet**\n${reqBody.object}\n<:contact:1059131491646459985>・**E-mail**\n${reqBody.email}\n\n<:text:1064002116986867772>・**Message**\n\`${reqBody.message}\``,
           /* fields: [
                {
                    name: ':e_mail: Email :',
                    value: reqBody.email,
                }
            ], */
            timestamp: new Date().toISOString()
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