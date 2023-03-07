import React from "react";
// import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useTodo } from "../hooks/input";

function Detail() {
  const [todo] = useTodo();
  // const todo = useSelector((state) => state.todos);
  const param = useParams();
  const detailTodo = todo.find((item) => {
    return item.id === Number(param.id);
  });
  console.log(param);
  return (
    <div>
      <Link to="/">이전으로 돌아가기</Link>
      <div> ID:{param.id}</div>
      <div>{detailTodo.title}</div>
      <div>{detailTodo.content}</div>
    </div>
  );
}

export default Detail;
