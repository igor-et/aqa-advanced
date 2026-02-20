// завдання 3

async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
}

async function runAll() {
  try {
    const [todo, user] = await Promise.all([
      fetchTodo(),
      fetchUser()
    ]);

    console.log("Promise.all result:");
    console.log(todo);
    console.log(user);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function runRace() {
  try {
    const result = await Promise.race([
      fetchTodo(),
      fetchUser()
    ]);

    console.log("Promise.race result:");
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

runAll();
runRace();