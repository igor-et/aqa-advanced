// завдання 2

function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json());
}

const todoPromise = fetchTodo();
const userPromise = fetchUser();

/* Promise.all */
Promise.all([todoPromise, userPromise])
  .then(([todo, user]) => {
    console.log("Promise.all result:");
    console.log(todo);
    console.log(user);
  })
  .catch(error => {
    console.error("Error:", error);
  });

/* Promise.race */
Promise.race([todoPromise, userPromise])
  .then(result => {
    console.log("Promise.race result:");
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error);
  });