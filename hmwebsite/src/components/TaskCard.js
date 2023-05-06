import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { toogleTodo,deleteTodo, editTodo } from "../redux/todoSlice";


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
        <div>
            <div className="firstline">
                <input type="checkbox" defaultChecked={completed} onChange={toogle} className="checkbb"></input>
                <label className="do-label">{text}</label>
            </div>
            
            <div className="secondLine">
                <button onClick={delTodo} className="dwn-btn1">Eliminar</button>
                <Button variant="primary" onClick={handleShow}  className="dwn-btn2">Editar</Button>
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
