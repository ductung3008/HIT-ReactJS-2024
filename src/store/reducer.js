import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  GET_EDIT_TODO,
  EDIT_TODO,
  SET_THEME,
} from "../constants/storeConstants";

const initState = {
  todoInput: "",
  todos: [],
  isEdit: false,
  editIndex: 0,
  theme: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
        todoInput: "",
      };
    case DELETE_TODO: {
      const newTodos = state.todos.filter(
        (_, index) => index !== action.payload,
      );
      return {
        ...state,
        todos: newTodos,
      };
    }
    case GET_EDIT_TODO:
      return {
        ...state,
        todoInput: state.todos[action.payload],
        isEdit: true,
        editIndex: action.payload,
      };
    case EDIT_TODO: {
      const newTodos = [...state.todos];
      newTodos[state.editIndex] = state.todoInput;
      return {
        ...state,
        todoInput: "",
        todos: newTodos,
        isEdit: false,
      };
    }
    case SET_THEME: {
      return {
        ...state,
        theme: !state.theme,
      };
    }
    default:
      throw new Error("Invalid action type");
  }
};

export { initState };

export default reducer;
