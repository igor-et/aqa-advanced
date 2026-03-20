const axios = require('axios');

async function getPostsWithParams() {

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
            headers: {
                Authorization: "Bearer testtoken",
                "Custom-Header": "MyHeader"
            },
            params: {
                userId: 1
            }
        }
    );

    return response;
}

describe("Headers and params tests", () => {

    test("should get headers and params correctly", async () => {

        const response = await getPostsWithParams();

        expect(response.status).toBe(200);
        expect(response.config.headers["Custom-Header"]).toBe("MyHeader");
        expect(response.config.params.userId).toBe(1);

    });

});