const axios = require('axios');

async function getWrongUrl() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/wrongurl"
        );

        return response.data;
    } catch (error) {
        return error.response.status;
    }
}

describe("Error handling tests", () => {

    test("should return 404 for wrong URL", async () => {
        const result = await getWrongUrl();

        expect(result).toBe(404);
        console.log("check what we have in result:", result);
    });

});