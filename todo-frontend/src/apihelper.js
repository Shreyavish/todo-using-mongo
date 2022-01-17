import axios from "axios"

const create_API_URL = "http://localhost:4000/createtodo/"
const get_API_URL = "http://localhost:4000/gettodos/"
const delete_API_URL ="http://localhost:4000/deletetodo/"
const put_API_URL ="http://localhost:4000/updatetodo/"

async function createTodo(task) {
    //console.log(task)
  const { data: newTodo } = await axios.post(create_API_URL, {
    task,
  })
  return newTodo
}

async function deleteTodo(id) {
    console.log(`${delete_API_URL}${id}`);

  const message = await axios.delete(`${delete_API_URL}${id}`)
  return message
}

async function updateTodo(id, payload) {
  const message = await axios.put(`${put_API_URL}${id}/${payload}`)
  return message
}

async function getAllTodos() {
  const { data: todos } = await axios.get(get_API_URL)
  return todos
}

export default { createTodo, deleteTodo, getAllTodos,updateTodo }