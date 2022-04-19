import { useState } from "react";
import './App.css';

function App() {

  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const onAdd = () => {
    setTodos([...todos,
    {
      title: todoTitle,
      checked: false
    }
    ]);
    setTodoTitle("");
  }

  const onCheckboxChange = (checked, index) => {
    setTodos(todos.map((todo, _index) => index === _index ? ({ ...todo, checked }) : todo));
  }

  const onSend = () => {
    console.log(todos)
  }

  return (
    <div className="app">
      <header>
        <h1>Todo App Emily</h1>
      </header>
      <div class="todo-body">
        <input
          type="text"
          placeholder="Título da tarefa"
          value={todoTitle}
          onChange={(ev) => setTodoTitle(ev.target.value)}
          onKeyDown={(ev) => ev.key === "Enter" && onAdd()}
        />
        <button className="add-button" onClick={onAdd}>+</button>
        <ul>
          {
            todos.map((todo, index) => {
              return (
                <li style={todo.checked ? {textDecoration: "line-through"} : {}}>
                  <input
                    type="checkbox"
                    checked={todo.checked}
                    onChange={(ev) => onCheckboxChange(ev.target.checked, index)}
                  />
                  {todo.title}
                </li>
              )
            })
          }
        </ul>
        <footer>
          <button onClick={onSend}>Enviar</button>
        </footer>
      </div>
    </div>
  );
}

export default App;