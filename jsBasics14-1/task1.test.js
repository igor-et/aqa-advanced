

const axios = require('axios');


describe("JSONPlaceholder GET API tests todos/1", () => {

  test("GET /todos/1 - should return correct status and data ", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("completed");
  });

});

describe("JSONPlaceholder GET API tests posts/1", () => {

  test("GET /posts/1 - should return correct post", async () => {

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    expect(response.status).toBe(200);
    expect(response.data.userId).toEqual(1);;
    expect(response.data).toHaveProperty(
      "title",
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    );
  });

});

describe("JSONPlaceholder POST API tests /posts", () => {

  test("POST /posts - should create new post", async () => {

    const newPost = {
      title: "Test post 1",
      body: "This is a body of a test post",
      userId: 1
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newPost
    );

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("title", "Test post 1");
    expect(response.data).toHaveProperty("body", "This is a body of a test post");
    expect(response.data.userId).toEqual(1);
    expect(response.data.id).toEqual(expect.any(Number));

  });
});

describe("JSONPlaceholder POST API tests /comments", () => {

  test("POST /comments - should create new comment", async () => {

    const newComment = {
      postId: 1,
      name: "test name",
      email: "test@email.com",
      body: "test body text"
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/comments",
      newComment
    );

    expect(response.status).toBe(201);
    expect(response.data.email).toContain("@");
    expect(response.data.id).toEqual(expect.any(Number));
    expect(response.data.name).toEqual(expect.any(String));

  });

});