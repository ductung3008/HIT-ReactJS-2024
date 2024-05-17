import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  GET_EDIT_TODO,
  EDIT_TODO,
  SET_THEME,
} from "../constants/storeConstants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = () => ({
  type: ADD_TODO,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index,
});

export const getEditTodo = (index) => ({
  type: GET_EDIT_TODO,
  payload: index,
});

export const editTodo = (index) => ({
  type: EDIT_TODO,
  payload: index,
});

export const setTheme = () => ({
  type: SET_THEME,
});
