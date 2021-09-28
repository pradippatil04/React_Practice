import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

const Todos:React.FC = () =>{
  const TodosCtx = useContext(TodosContext);
   
  return (
    <ul className={classes.todos}>
      {TodosCtx.items.map(item => <TodoItem 
                               onRemoveTodo={TodosCtx.removeTodo.bind(null,item.id)}
                               key={item.id} text={item.text} />)}
    </ul>
  );
}

export default Todos;
