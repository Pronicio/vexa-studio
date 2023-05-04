const WEBHOOK = "https://discord.com/api/webhooks/1103635163101012049/Hx6zH8bbn4xk4szrCkGgwUmzfFBeCqggAtQypbcI82RzmS7bfdHuV_z865XgN0c64LhY"

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
        const response = await fetch(WEBHOOK, init);
        return response.status === 200;
    } catch (error) {
        return false
    }
}

export function testData(reqBody) {
    if (
        reqBody.username &&
        reqBody.subname &&
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
