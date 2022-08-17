import CV from "../media/PabloGarciaCV.pdf"
import RESUME from "../media/PabloGarciaResume.pdf"

export default function Home(){
    return (
    <div className="home">
    <div className="homeHeader">
        
        <h1>El porqué de esta pagina:</h1>
    </div>
    <div className="homeBody">
        <div className="justificacion"> 
            Esta pagina fue desarrollada en ReactJS con el fin de mostrar mis habilidades en el desarrollo web y en algoritmos de programación.
             Toda la pagina fue hecha con ReactJS puro y CSS para estilizar, a excepcion de los botones colapsables que estan en la seccion "Sobre mi" 
             y los cuadros de dialogo que aparecen al modificar una tarea de la ToDo App. 
        </div>
        <div className="todoapp">

            Para el desarrollo de la ToDo App hice uso de useState Hooks en los cuales almacene arreglos de objetos teniendo las siguientes caracteristicas:
            valor, index y check de la tarea. En donde el valor era el texto de la tarea, el index era para el manejo interno a la hora de editar o eliminar
            una tarea y el check para saber si la tarea estaba actualmente marcada como completada o no. Cada una de las 3 vistas maneja un arreglo diferente,
            siendo el de "Todas las tareas" el único que contiene todas las tareas que ha ingresado el usuario mientras la vista de completadas y pendientes
            tendrán correspondientemente las tareas que ya se chequearon y las que no se han chequeado. Para mostrar los arreglos se utilicé la funcion map 
            que permite mostrar un componente por cada valor existente en el arreglo. Si ves algo en esta pagina que podría mejorar porfavor escribeme a mi 
            correo electronico que lo encontraras en la pestaña de Contacto.
        </div>
        <div className="intenciones">
            Mi intencion es llevar un tracking de mis capacidades en esta pagina, haciendo actualizaciones periodicas agregando aplicaciones desarrolladas con 
            diferentes herramientas.
            Dejo a continuacion mi CV en español y en inglés.
            <br></br>
            <div className="botones">
            <a href={CV} download={CV}><button className="getbtn">Obtener Curriculum</button></a>
            <a href={RESUME} download={RESUME}><button className="getbtn">Get Resume</button></a>
            
            </div>
            
        </div>
    </div>
    
   
    </div>
    );
    
}
