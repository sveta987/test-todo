import {useState} from "react"
import Todos from "./Todos";
import AddTodo from "./AddTodo";

const App = () => {

  const [todos, setTodos] = useState([]);


  const addTodo = todo => {
    if (!todo.title) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  const removeTodo = id => {
    const newTodos = [...todos].filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const doneTodo = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    console.log(todos)
    setTodos(newTodos);
  }

  const editTodo = (id, value) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.title = value;
      return todo;
    });
    setTodos(newTodos);
  }

  const deleteAll = () => {
    setTodos([]);
  }

  return (
    <div className="App  flex justify-center px-[25px] h-[600px] mt-[100px]">
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center pb-[25px] px-[25px] mb-[25px]">
        <div className=" mt-[25px] pb-[50px] border-b border-gray-300 ">
          <div className="heading flex flex-row justify-center mb-[20px]">
            <img src={require('./img/logo.jpg')} className="mr-3 h-6 sm:h-9" alt="Logo"/>
            <h2 className="font-medium leading-tight text-3xl mb-2 text-[#3F6ED6]">My ToDo </h2>
          </div>
          <AddTodo addTodo={addTodo}/>
        </div>
        <Todos
          todos={todos}
          removeTodo={removeTodo}
          doneTodo={doneTodo}
          editTodo={editTodo}
        />
        {
          todos.length > 0 &&
          <button onClick={  deleteAll } className="btn !mt-[25px]"> Delete All ({todos.length})</button>
        }

      </div>

    </div>
  )
}

export default App
