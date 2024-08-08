import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';

export function AddTODO({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página.
    
    // Verifica se o campo não está vazio antes de adicionar.
    if (newTodo.trim() !== "") {
      // Cria um novo objeto `todo` e passa para a função `addTodo` recebida via props.
      addTodo({
        id: uuidv4(),
        title: newTodo,
        completed: false,
      });

      // Limpa o campo `textarea` após adicionar o novo todo.
      setNewTodo("");
    }
  };

  return (
    <>
      <form className="todoAddBar" onSubmit={handleSubmit}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></textarea>

        <button type="submit">
          Criar <PlusCircle size={32} />
        </button>
      </form>
    </>
  );
}
