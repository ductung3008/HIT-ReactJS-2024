import React, { useReducer } from "react";
import "./ToDoApp.scss";

// useReducer
// 1. init State
const initState = {
  todoInput: "",
  todos: [],
};
// 2. actions
const SET_INPUT_VALUE = "set_input_value";
const ADD_TODO = "add";
const UPDATE_TODO = "update";
const DELETE_TODO = "delete";

const setTodo = (payload) => ({
  type: SET_INPUT_VALUE,
  payload,
});

const updateTodo = (index) => ({
  type: UPDATE_TODO,
  index,
});

const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});
// 3. reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        todos: [...state.todos, state.todoInput],
        todoInput: "",
      };
    case UPDATE_TODO: {
      if (state.todoInput === "") {
        const currentTodo = state.todos[action.index];
        return {
          ...state,
          todoInput: currentTodo,
        };
      }
      const updatedTodos = [...state.todos];
      updatedTodos[action.index] = state.todoInput;
      return {
        ...state,
        todos: updatedTodos,
        todoInput: "",
      };
    }
    case DELETE_TODO: {
      let deleteTodo = [...state.todos];
      deleteTodo.splice(action.id, 1);
      console.log(deleteTodo);
      return {
        ...state,
        todos: [...deleteTodo],
      };
    }
    default:
      throw new Error("Invalid action");
  }
};
// 4. dispatch

function ToDoApp() {
  const [todo, dispatch] = useReducer(reducer, initState);
  return (
    <div className="to-do-app">
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todo.todoInput}
        onChange={(e) => dispatch(setTodo(e.target.value))}
      />
      <button onClick={() => dispatch({ type: ADD_TODO })}>Add todo</button>

      <ul>
        <li>Quét nhà &times;</li>
        <li>Rửa bát &times;</li>
        <li>Nấu cơm &times;</li>
        {todo?.todos &&
          todo.todos.map((item, index) => (
            <li key={index}>
              <p style={{ display: "inline" }}>{item}</p>
              <button onClick={() => dispatch(deleteTodo(index))}>
                &times;
              </button>
              <button onClick={() => dispatch(updateTodo(index))}>Sửa</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
