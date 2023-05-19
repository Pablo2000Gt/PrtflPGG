import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";



const TodoList = ({filter}) =>{
    const todos = useSelector((state)=>{
        if(filter === "pending"){
            return state.todos.filter((todo)=>todo.completed === false);
        }else if(filter === "done"){
            return state.todos.filter((todo)=>todo.completed === true);
        }else{
            return state.todos;
        }
    });
    return(
        <ul id="ulstyle">
            {todos.map((todo)=>(
                <TaskCard key={todo.id}id={todo.id} text={todo.text} completed={todo.completed}></TaskCard>
            ))}
        </ul>
    );
;}
export default TodoList;