import Clipboard from "../components/assets/images/Clipboard.svg";
import { Trash,Check } from "phosphor-react";

export function TODOBox({ todos = [], toggleCompleted, removeTodo }) {
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="TODOBox">
      <div className="counters">
        <div className="criadas">
          <span>
            Tarefas criadas <strong>{totalCount * 1}</strong>
          </span>
        </div>
        <div className="concluidas">
          <span>
            Tarefas concluidas{" "}
            <strong>
              {completedCount * 1 === 0
                ? "0"
                : completedCount * 1 + " de " + totalCount}
            </strong>
          </span>
        </div>
      </div>
      <div className="todoCards">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id} className="card">
              <button
                className={`toggle-button ${todo.completed ? "completed" : ""}`}
                onClick={() => toggleCompleted(todo.id)}
              >
                {todo.completed && <Check size={16} color="white" weight="bold" />}
              </button>
              <h3 className= {`${todo.completed ? "completed" : ""}`}>{todo.title}</h3>
              <button onClick={() => removeTodo(todo.id)}>
                <Trash size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="noCards">
            <img src={Clipboard} alt="Clipboard icon" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
}