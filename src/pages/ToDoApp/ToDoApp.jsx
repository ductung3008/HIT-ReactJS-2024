import React, { useRef } from "react";
import useStore from "../../hooks/useStore";
import { actions } from "../../store";
import "./ToDoApp.scss";

const App = () => {
  const [state, dispatch] = useStore();
  const inputRef = useRef();
  return (
    <div className="app">
      <div className={`todo ${state.theme ? "dark" : ""}`}>
        <h1>TO-DO APP</h1>
        <form>
          <input
            ref={inputRef}
            type="text"
            value={state.todoInput}
            onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              !state.isEdit
                ? dispatch(actions.addTodo())
                : dispatch(actions.editTodo());
              inputRef.current.focus();
            }}
          >
            {!state.isEdit ? "Thêm" : "Sửa"}
          </button>
        </form>
        <ul>
          {state.todos.map((todo, index) => (
            <li key={index}>
              <p>{todo}</p>
              <div>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => dispatch(actions.deleteTodo(index))}
                ></i>
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={() => dispatch(actions.getEditTodo(index))}
                ></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
