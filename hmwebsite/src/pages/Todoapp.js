import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


export default function Todoapp(){
    const [newDo,setDo] = useState('');

    const [todoList,setList] = useState([]);
    const [auxList,setAux] = useState([]);
    
    const [doneList,setDone] = useState([]);
    const [pendList,setPend] = useState([]);

    const [index,setIndex] = useState(0);
    const [modDo,setMod] = useState('');

    const [uIndex,setUi] = useState(0);
    const [uValue,setUv] = useState('');

    const[aux, showAux] = useState(false);

    const [all, showAll] = useState(true);
    const handleAll = () =>{
        showAll(true);
        showAux(false);
        showPending(false);
        showDone(false);
    };

    const [pending, showPending] = useState(false);
    const handlePending = () =>{
        showAll(false);
        showAux(false);
        showPending(true);
        showDone(false);
    };

    const [done, showDone] = useState(false);
    const handleDone = () =>{
        showAll(false);
        showAux(false);
        showPending(false);
        showDone(true);
    };

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   
    const delTask = (e) =>{
        const index = parseInt(e.target.getAttribute("index"));

        var nList = [];
        var flag = false;
        var y = 0;
        for (var i = 0;i<todoList.length;i++){
            
            if(i !== index||flag){
                nList.push({value:todoList[i].value,index:i-y,check:todoList[i].check});
            }else{
                flag = true;
                y=1;
            }
        }
        console.log(nList)
        setList(nList);
        setIndex(nList.length);

        var plist = [];
        for (var k = 0;k<pendList.length;k++){
            for(var h = 0; h<nList.length;h++){
                if(pendList[k].value === nList[h].value){
                    plist.push({value:nList[h].value,index:nList[h].index,check:false})
                    break;
                }
            }
        }
        setPend(plist);

        var dList = [];
        for (var l = 0;l<doneList.length;l++){
            for(var b = 0; b<nList.length;b++){
                if(doneList[l].value === nList[b].value){
                    dList.push({value:nList[b].value,index:nList[b].index,check:true})
                    break;
                }
            }
        }
        setDone(dList);

        setAux(nList);
        if(all){
            showAll(!all);
            showAux(!aux)
        }else if(aux){
            showAux(!aux);
            showAll(!all)
        }
        
    }


    const handleCheck = (e) => {
        const index = parseInt(e.target.getAttribute("index"));
        if (e.target.checked) {
        

            setDone(prevList=>[...prevList,{value:todoList[index].value,index:todoList[index].index,check:true}]);
            var correctList = todoList;
            correctList[index] = {value:todoList[index].value,index:todoList[index].index,check:true};
            setList(correctList);

            var plist = [];
            var pflag = false;
            for (var k = 0;k<pendList.length;k++){
                if(pendList[k].index !== index||pflag){
                    plist.push({value:pendList[k].value,index:pendList[k].index,check:false});
                    
                }else{
                    pflag = true;
                    
                    
                }
            }
            setPend(plist);

        } else {
            console.log(todoList[index].value+ " "+todoList[index].index+" "+false)
            setPend(prevList=>[...prevList,{value:todoList[index].value,index:todoList[index].index,check:false}])
            var dList = [];
            var dflag = false;
            var x = 0;
            

            for (var i = 0;i<doneList.length;i++){
                if(doneList[i].index !== index||dflag){
                    dList.push({value:doneList[x].value,index:doneList[x].index,check:true});
                    x++;
                }else{
                    dflag = true;
                    
                    x++
                }
            }
            setDone(dList);
            var CcorrectList = todoList;
            CcorrectList[index] = {value:todoList[index].value,index:todoList[index].index,check:false};
            setList(CcorrectList);
        }
        
      };

    const preUpd = (e) =>{
        const index = parseInt(e.target.getAttribute("index"));
        setUi(index);
        setUv(todoList[index].value);
        handleShow();
    }
    const updTask = (e)=>{
        var newList = todoList;
        newList[uIndex] = {value:modDo,index:uIndex,check:todoList[uIndex].check};
        setList(newList);

        for(var j= 0; j < doneList.length; j++){
            console.log(j)
            if(doneList[j].index===uIndex){
                console.log(doneList[j].value)
                var newDone = doneList;
                newDone[j].value = modDo
                setDone(newDone);
            }
        }
        for(var z= 0; z < pendList.length; z++){
            if(pendList[z].index===uIndex){
                console.log(pendList[z].value)
                var newPend = pendList;
                newPend[z].value = modDo
                setPend(newPend)
            }
        }


        handleClose();
    }
     
    const needList = pendList.map((task)=>(
        <li key={task.index} className="liTask">
            <div className="firstline">
                <input type="checkbox" defaultChecked={false} onChange={handleCheck} index={task.index} className="checkbb"></input>
                <label className="do-label">{task.value}</label>
            </div>
            
            <div className="secondLine">
                <button onClick={delTask} index={task.index} className="dwn-btn1">Eliminar</button>
                <Button variant="primary" onClick={preUpd} index={task.index} className="dwn-btn2">Editar</Button>
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
    const dataList = doneList.map((task)=>(
        <li key={task.index} className="liTask">
            <div className="firstline">
                <input type="checkbox" defaultChecked={true} onChange={handleCheck} index={task.index} className="checkbb"></input>
                <label className="do-label">{task.value}</label>
            </div>
            
            <div className="secondLine">
                <button onClick={delTask} index={task.index} className="dwn-btn1">Eliminar</button>
                <Button variant="primary" onClick={preUpd} index={task.index} className="dwn-btn2">Editar</Button>
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
    const taskList = todoList.map((task) => (
        /*
        <Dos label={task} key={n++} />
        */
        <li key={task.index} className="liTask">
            <div className="firstline">
                <input type="checkbox" defaultChecked={todoList[task.index].check} onChange={handleCheck} index={task.index} className="checkbb"></input>
                <label className="do-label">{task.value}</label>
            </div>
            
            <div className="secondLine">
                <button onClick={delTask} index={task.index} className="dwn-btn1">Eliminar</button>
                <Button variant="primary" onClick={preUpd} index={task.index} className="dwn-btn2">Editar</Button>
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
    const auxTasks = auxList.map((task) => (
        /*
        <Dos label={task} key={n++} />
        */
        <li key={task.index} className="liTask">
            <div className="firstline">
                <input type="checkbox" defaultChecked={todoList[task.index].check} onChange={handleCheck} index={task.index} className="checkbb"></input>
                <label className="do-label">{task.value}</label>
            </div>
            
            <div className="secondLine">
                <button onClick={delTask} index={task.index} className="dwn-btn1">Eliminar</button>
                <Button variant="primary" onClick={preUpd} index={task.index} className="dwn-btn2">Editar</Button>
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
        <h1>ToDo App</h1>
        <div className="inputArea">
            <h2>¿Qué tienes que hacer hoy?</h2>
            <input type="text" id="todo-input" name="new-do" value={newDo} onChange={e=>setDo(e.target.value)}></input>
            <br></br>
            <button className="add-btn" onClick={()=>{
                setList(prevList=>[...prevList,{value:newDo,index:index,check:false}])
                setPend(prevList=>[...prevList,{value:newDo,index:index,check:false}])
                setIndex(index+1)
                setDo('')
                }}>Add</button>
            <br/>
            
            <button onClick={handleAll} className={(all||aux)?"filter-btn-active":"filter-btn"}>Todas las Tareas</button>
            <button onClick={handlePending} className={pending?"filter-btn-active":"filter-btn"}>Pendientes</button>
            <button onClick={handleDone} className={done?"filter-btn-active":"filter-btn"}>Completadas</button>
        </div>
        <hr/>
        <ul className="do-list">
            {all ? taskList : null}
            {aux ? auxTasks: null}
            {pending ? needList: null}
            {done ? dataList : null}
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