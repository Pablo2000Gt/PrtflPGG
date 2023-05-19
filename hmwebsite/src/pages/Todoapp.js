import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import TodoList from "../components/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import notification from "../media/iphone_notification.mp3";

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
        play();
        event.preventDefault();
        dispatch(addTodo({
            text:value,
        }))
        setValue("")
    }

    return (
    <div className="appPage">

        <div className="App">
            <div className="inputArea">
                <div className="chat">
                    <div className="text1">
                        What are you doing today?
                    </div>
                    <div className="textnBtn">
                        <input type="text" id="todo-input" name="new-do" value={value} onChange={e=>setValue(e.target.value)}></input>
                        <button className="add-btn" onClick={onSubmit}>
                            <FontAwesomeIcon className="addIcon" icon={faArrowUp} style={{color: "#ffffff",}}></FontAwesomeIcon>
                        </button>
                    </div>
                </div>
                <br/>
                <div className="filters">
                    <div className="filter-div">
                        <button onClick={handleAll} className={all?"all-btn-active":"all-btn"}>
                            <FontAwesomeIcon icon={faClipboardList} style={{color: "#ffffff",}}></FontAwesomeIcon>
                        </button>
                        All
                    </div>
                    <div className="filter-div">
                        <button onClick={handlePending} className={pending?"pending-btn-active":"pending-btn"}>
                            <FontAwesomeIcon icon={faHourglass1} style={{color: "#ffffff",}}></FontAwesomeIcon>
                        </button>
                        Pending
                    </div>
                    <div className="filter-div">
                        <button onClick={handleDone} className={done?"done-btn-active":"done-btn"}>
                            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#ffffff",}}></FontAwesomeIcon>
                        </button>
                        Done
                    </div>
                </div>
            </div>
            <hr/>   
            <TodoList filter={filter}></TodoList>
        </div>   
    </div>
    );
}
function play(){
    new Audio(notification).play();
}
export default Todoapp;
