import React, { useState, useEffect } from "react";

const index = () => {
  const [todos, setTodos] = useState<string[]>([]); // specify type as string[]
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // localStorage.clear();
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim() === "") return; // prevent adding empty todo
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1 className="font-bold">Todo App</h1>
      <input
        className="border border-b-8"
        placeholder="Your todo here"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={addTodo} className="border border-blue-300 p-2">
        Add Todo
      </button>
      <ul className="flex flex-col justify-start items-start">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default index;
