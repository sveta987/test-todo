import {useEffect, useState} from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App = () => {
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  })
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : []);

  const setTodosInLocalStorageAndInTodos = newTodos => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  const addTodo = todo => {
    if (!todo.title.trim()) return;
    const newTodos = [todo, ...todos];
    setTodosInLocalStorageAndInTodos(newTodos);
  }

  const removeTodo = id => {
    const newTodos = [...todos].filter(todo => todo.id !== id);
    setTodosInLocalStorageAndInTodos(newTodos);
  }

  const doneTodo = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodosInLocalStorageAndInTodos(newTodos);
  }

  const editTodo = (id, value) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) todo.title = value;
      return todo;
    });
    setTodosInLocalStorageAndInTodos(newTodos);
  }

  const deleteAll = () => {
    setTodos([]);
    localStorage.removeItem('todos');
  }

  return (<>
      <div className="App  flex !justify-center  px-[25px] h-[500px] mt-[100px]">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center pb-[25px] px-[25px] mb-[25px]">
          <div className="mt-[25px] pb-[50px] border-b border-gray-300">
            <div className="heading flex flex-row justify-center mb-[20px]">
              <img src={require('./img/logo.jpg')} className="mr-3 h-6 sm:h-9" alt="Logo"/>
              <h2 className="font-medium leading-tight text-3xl mb-2 text-[#3F6ED6]">My ToDo </h2>
            </div>
            <AddTodo addTodo={addTodo}/>
          </div>
          <div className="overflow-auto max-h-[60%]">
            <Todos
              todos={todos}
              removeTodo={removeTodo}
              doneTodo={doneTodo}
              editTodo={editTodo}
            />
          </div>
        </div>
      </div>
      {
        todos.length > 0 &&
        <div className="flex !justify-center">
          <button onClick={deleteAll} className="btn !mt-[25px]"> Delete All ({todos.length})
          </button>
        </div>
      }
    </>

  )
}

export default App
