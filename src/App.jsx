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

  // Função para adicionar um novo todo
  const addTodo = (newTodo) => {
    // Usamos o spread operator para criar um novo array de todos,
    // adicionando o novo todo no final.
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Função para alternar o valor de completed de um todo
  const toggleCompleted = (id) => {
    // Criamos um novo array de todos, alterando o `completed` do todo específico.
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Função para remover um todo do array
  const removeTodo = (id) => {
    // Filtramos o array de todos para criar um novo array sem o todo removido.
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
