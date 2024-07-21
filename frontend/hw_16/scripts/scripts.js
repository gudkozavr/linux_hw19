const todosUrl = "https://jsonplaceholder.typicode.com/todos/1";

async function getFunction() {
  const respons = await fetch(todosUrl);
  const data = await respons.json();
  console.log(data);
}
getFunction();

const urlPosts = "https://jsonplaceholder.typicode.com/posts?_limit=10";

async function tenElements() {
  const response = await fetch(urlPosts);
  const data = await response.json();
  console.log(data);
}
tenElements();

let arr = [];

console.log;
