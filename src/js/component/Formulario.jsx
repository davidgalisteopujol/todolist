import React from "react";
import { useState } from "react";
import Lista from "./Lista.jsx";

const Formulario = () => {

    const [inputCreado, setInputCreado] = useState("");
	const [tarea, setTarea] = useState([]);
	

	const añadirTarea = (e) => {
		setInputCreado(e.target.value);
	}

	const crearArray = (e) =>{
		if(e.key === 'Enter') {
			setTarea([...tarea, inputCreado])
			setInputCreado("")
		}
	}

	const borrarTarea= (index) => {
		const borradoArray= [...tarea]
		borradoArray.splice(index,1)
		setTarea(borradoArray)
	}

    return (
        <div>

            <input className="container" style={{width:"290px"}} type="text" onChange={añadirTarea} value={inputCreado}  onKeyPress={crearArray} />

            <div>
                {
				tarea.map((tarea,index) => <Lista borrarTarea={(e)=>borrarTarea(index)} tarea={tarea} key={index}/> )
				}
            </div>

        </div>

    )
}

export default Formulario;