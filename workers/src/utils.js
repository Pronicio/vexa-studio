const WEBHOOK = "https://discord.com/api/webhooks/1104519939521523813/zKNhn2TDxxAtpEXJ3iyT60F08GVAkvEOLX_2YWYZ_UJ3sLd9J-PhNH7lxEJBc7FkT_jZ"

export async function readRequestBody(request) {
    const contentType = request.headers.get("content-type");
    if (!contentType) return false

    if (contentType.includes("application/json")) {
        return JSON.stringify(await request.json());
    }

    if (contentType.includes("form")) {
        const formData = await request.formData();
        const body = {};

        for (const entry of formData.entries()) {
            body[entry[0]] = entry[1];
        }

        return body;
    }

    return false
}

export async function postWebhook(body) {
    const init = {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
    };

    try {
        await fetch(WEBHOOK, init);
        return true
    } catch (error) {
        return false
    }
}

export function testData(reqBody) {
    if (
        reqBody.username &&
        reqBody.surname &&
        reqBody.email &&
        reqBody.object &&
        reqBody.message
    ) {
        const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g
        if (reqBody.email.match(regexEmail)) {
            return true
        }
    }

    return false
}