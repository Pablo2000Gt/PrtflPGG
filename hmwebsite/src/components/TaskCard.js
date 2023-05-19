import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { toogleTodo,deleteTodo, editTodo } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function TaskCard({id,text,completed}){
    const dispatch = useDispatch();

    
    const [show, setShow] = useState(false);
    const [modDo,setMod] = useState('');
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toogle=()=>{
        dispatch(toogleTodo({
            id:id,
            completed:!completed
        }))
    }
    const delTodo=()=>{
        dispatch(deleteTodo({
            id:id
        }))
    }
    const edit =()=>{
        dispatch(editTodo({
            id:id,
            text:modDo
        }))
        handleClose()
    }

    return(
        <div id="task">
            <div className="firstline">
                <FontAwesomeIcon id="checkbb" icon={completed?faCheckCircle:faHourglass1} style={{
                    backgroundColor:completed?"green":"#e97900",
                    color:"#ffffff",
                    marginTop:"25px",
                    marginRight:"25px",
                    marginLeft:"25px",
                    padding:"10px",
                    fontSize: "30px",
                    minWidth:"30px",
                    borderRadius: "15px",
                    }} ></FontAwesomeIcon>
                <label className="do-label">{text}</label>
                <input type="checkbox" className="checkbb" defaultChecked={completed} onChange={toogle}></input>
            </div>
            
            <div className="secondLine">

                <button onClick={delTodo} className="dwn-btn1">
                    <FontAwesomeIcon icon={faTrash} style={{color:"#ffffff"}}></FontAwesomeIcon>
                </button>

                <button onClick={handleShow}  className="dwn-btn2">
                    <FontAwesomeIcon icon={faPenToSquare} style={{color:"#ffffff"}}></FontAwesomeIcon>
                </button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Editar Tarea:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                            type="text"
                            defaultValue={text}
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
                      <Button variant="primary" onClick={edit}>
                        Confirmar
                      </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TaskCard;
