import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useInput = (initial) => {
  const [inputValue, setInputValue] = useState(initial);
  const handle = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, setInputValue, handle];
};

export const useTodo = () => {
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return [todo, dispatch];
};
