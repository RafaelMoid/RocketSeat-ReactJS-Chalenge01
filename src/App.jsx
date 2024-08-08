import "./style.css";
import { Header } from "./components/Header.jsx";
import { AddTODO } from "./components/AddBar.jsx";
import { TODOBox } from "./components/TODOBox.jsx";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Estado inicial dos todos
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Estudar ReactJS",
      completed: false, 
    },
    {
      id: uuidv4(),
      title: "Entregar projeto ReactJS",
      completed: true, 
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleCompleted = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Header />
      <AddTODO addTodo={addTodo} />
      <TODOBox todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
    </>
  );
}

export default App;
