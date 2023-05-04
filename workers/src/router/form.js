import { postWebhook, readRequestBody, testData } from '../utils.js'

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

    const userAvatar = `https://api.dicebear.com/6.x/micah/png?seed=${reqBody.username}`

    const body = {
        name: reqBody.username,
        avatar: userAvatar,
        allowed_mentions: {
            parse: [ 'users', 'roles' ],
        },
        embeds: [ {
            author: {
                name: `${reqBody.username} ${reqBody.subname}`,
                url: `https://www.google.com/search?q=${reqBody.username}`,
                icon_url: userAvatar,
            },
            description: `**Objet** : ${reqBody.object} \n **Message :** ${reqBody.message}`,
            fields: [
                {
                    name: ':e_mail: Email :',
                    value: reqBody.email,
                }
            ],
            timestamp: new Date().toISOString()
        } ],
    }

    const webhook = await postWebhook(body)
    if (!webhook) new Response("Error on webhook", { status: 500 });

    return new Response("Success !");
}
