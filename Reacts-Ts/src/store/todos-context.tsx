import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
    items: Todo[];
  addTodo: (text : string) => void;
  removeTodo: (id: string) => void;
}

const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (input: string) => {
    setTodos((prevTodo) => prevTodo.concat(new Todo(input)));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

  const context : TodoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
export { TodosContext };
