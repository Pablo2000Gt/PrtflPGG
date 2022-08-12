import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


export default function Todoapp(){
    const [newDo,setDo] = useState('');
    const [todoList,setList] = useState([]);
    const [index,setIndex] = useState(0);
    const [modDo,setMod] = useState('');

    const [uIndex,setUi] = useState(0);
    const [uValue,setUv] = useState('');

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   
    const delTask = (e) =>{
        const index = e.target.getAttribute("index");
        setList(todoList.filter(task => task.index !== parseInt(index)));
    }
    const preUpd = (e) =>{
        const index = parseInt(e.target.getAttribute("index"));
        setUi(index);
        setUv(todoList[index].value);
        handleShow();
    }
    const updTask = (e)=>{

        
        console.log('Update task '+uIndex);
        var newList = todoList;
        newList[uIndex] = {value:modDo,index:uIndex};
        setList(newList);
        console.log(todoList)
        handleClose();
    }
    
    
    /*
    const addDo = () =>{
        setList(prevList =>[prevList,newDo])
        console.log(todoList);
    };
    */
    
    const taskList = todoList.map((task) => (
        /*
        <Dos label={task} key={n++} />
        */
        <li key={task.index}>
            <input type="checkbox" defaultChecked={false}></input>
            <label className="do-label">{task.value}</label>
            <button onClick={delTask} index={task.index}>Eliminar</button>
            <Button variant="primary" onClick={preUpd} index={task.index}>Editar</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Editar Tarea:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                            type="text"
                            defaultValue={uValue}
                            onChange={e=>setMod(e.target.value)}
                            
                            autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                      </Button>
                      <Button variant="primary" onClick={updTask} index={task.index}>
                        Confirmar
                      </Button>
                    </Modal.Footer>
            </Modal>
        </li>
    ));
    
    return (
    <div className="App">
        <h1>Todo App</h1>
        <div className="inputArea">
            <h2>Tareas por hacer:</h2>
            <input type="text" id="todo-input" name="new-do" value={newDo} onChange={e=>setDo(e.target.value)}></input>
            <button className="add-btn" onClick={()=>{
                setList(prevList=>[...prevList,{value:newDo,index:index}])
                setIndex(index+1)
                setDo('')
                }}>Add</button>
            <br/>
            <button className="filter-btn">Todas las Tareas</button>
            <button className="filter-btn">Pendientes</button>
            <button className="filter-btn">Completadas</button>
        </div>
        <hr/>
        <ul className="do-list">
            {taskList}
        </ul>
    </div>   
    );
}
/*
const Dos= (props)=>{

    return(
        <li>
            <input type="checkbox" defaultChecked={props.completed}></input>
            <label className="do-label">{props.label}</label>
            <button>Editar</button>
            <button >Eliminar</button>
        </li>
    );
}
*/