const SUBMIT = "add_todo";
const DELETE = "delete_todo";
const MOVE = "move_todo";

export const submitTodo = (payload) => {
  return {
    type: SUBMIT,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

export const moveTodo = (payload) => {
  return {
    type: MOVE,
    payload,
  };
};

//초기 상태값
const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "리액트",
    content: "할만 했었지.......",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "리덕스",
    content: "울고 말았지......",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      const newTodos = {
        id: Date.now(),
        title: action.payload.title,
        content: action.payload.content,
        isDone: false,
      };
      return [...state, newTodos];
    case DELETE:
      const deleteTodos = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return deleteTodos;
    case MOVE:
      const moveTodos = state.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item;
      });
      return moveTodos;
    default:
      return state;
  }
};

export default todos;
