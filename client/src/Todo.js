import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const todoItems = [{ title: "brush" }, { title: "candle" }];
  const addTodo = () => {
    if (todo !== "") {
      console.log(todo);
      todoItems.push({ title: todo });
      setTodo("");
    }
  };
  const changeTodo = (e) => {
    setTodo(e.target.value);
  };
  const todos = todoItems.map((expData, index) => (
    <div key={index}>{expData.title}</div>
  ));
  useEffect(() => {
    const getError = async () => {
      console.log(todoItems);
    };

    // call the async function
    getError();
  });
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Email Address"
          name="email"
          value={todo}
          onChange={changeTodo}
        />
        <input type="submit" className="btn btn-info btn-block mt-4" />
      </form>
      {todos}
    </div>
  );
};

export default Todo;
