export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const body = typeof req.body === "string"
            ? req.body
            : JSON.stringify(req.body);

        const response = await fetch(
            "http://vanessabattung-api.runasp.net/api/Chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            });

        const text = await response.text();

        res
            .status(response.status)
            .send(text);

    }
    catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
}