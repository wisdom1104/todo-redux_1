import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useInput, useTodo } from "../hooks/input";
import { submitTodo, deleteTodo, moveTodo } from "../redux/modules/todos";

function Home() {
  const [title, setTitle, titleHandler] = useInput("");
  const [content, setContent, contentHandler] = useInput("");
  // const todo = useSelector((state) => state.todos);
  // const dispatch = useDispatch();
  const [todo, dispatch] = useTodo();
  console.log(todo);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(submitTodo({ title, content }));
          setTitle("");
          setContent("");
        }}
      >
        <div>
          제목 :
          <input type="text" value={title} onChange={titleHandler} />
          내용 :
          <input type="text" value={content} onChange={contentHandler} />
        </div>
        <button type="submit" value="추가하기">
          추가하기
        </button>
      </form>
      <div>
        {todo.map((item) => {
          if (item.isDone === false)
            return (
              <div key={item.id}>
                <Link to={`/detail/${item.id}`}>상세페이지</Link>
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.content}</h4>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(deleteTodo(item));
                      }}
                    >
                      삭제하기
                    </button>
                    <button
                      onClick={() => {
                        dispatch(moveTodo(item));
                      }}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
      <div>
        {todo.map((item) => {
          if (item.isDone === true)
            return (
              <div key={item.id}>
                <Link to={`/detail/${item.id}`}>상세페이지</Link>
                <div>
                  <h3>{item.title}</h3>
                  <h4>{item.content}</h4>
                  <div>
                    <button
                      onClick={() => {
                        dispatch(deleteTodo(item));
                      }}
                    >
                      삭제하기
                    </button>
                    <button
                      onClick={() => {
                        dispatch(moveTodo(item));
                      }}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </>
  );
}

export default Home;
