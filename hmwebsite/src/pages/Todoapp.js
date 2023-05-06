import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import TodoList from "../components/TodoList";

function Todoapp(){

    const [all, showAll] = useState(true);
    const [pending, showPending] = useState(false);
    const [done, showDone] = useState(false);

    const handleAll = () =>{
        showAll(true);
        showPending(false);
        showDone(false);
        setFilter("all");
    };

    const handlePending = () =>{
        showAll(false);
        showPending(true);
        showDone(false);
        setFilter("pending");
    };

    const handleDone = () =>{
        showAll(false);
        showPending(false);
        showDone(true);
        setFilter("done");
    };

    const [filter,setFilter] = useState("all");
    const [value,setValue] = useState("");
    const dispatch = useDispatch();

    
    const onSubmit=(event)=>{
        event.preventDefault();
        dispatch(addTodo({
            text:value,
        }))
        setValue("")
    }

    return (
    <div className="App">
        <h1>ToDo App</h1>
        <div className="inputArea">
            <h2>¿Qué tienes que hacer hoy?</h2>
            <input type="text" id="todo-input" name="new-do" value={value} onChange={e=>setValue(e.target.value)}></input>
            <br></br>
            <button className="add-btn" onClick={onSubmit}>Add</button>
            <br/>
            
            <button onClick={handleAll} className={all?"filter-btn-active":"filter-btn"}>Todas las Tareas</button>
            <button onClick={handlePending} className={pending?"filter-btn-active":"filter-btn"}>Pendientes</button>
            <button onClick={handleDone} className={done?"filter-btn-active":"filter-btn"}>Completadas</button>
        </div>
        <hr/>
        <TodoList filter={filter}></TodoList>
    </div>   
    );
}
export default Todoapp;
