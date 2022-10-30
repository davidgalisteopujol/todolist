import React from "react";
import { useState } from "react";
import Lista from "./LIsta.jsx";

const Formulario = () => {

    const [inputCreado, setInputCreado] = useState("");
	const [almacenarTarea, setAlmacenarTarea] = useState([]);
	

	const añadirTarea = (e) => {
		setInputCreado(e.target.value);
	}

	const crearArray = (e) =>{
		if(e.key === 'Enter') {
			setAlmacenarTarea([...almacenarTarea, inputCreado])
			setInputCreado("")
		}
	}

	const borrarTarea= (index) => {
		const borradoArray= [...almacenarTarea]
		borradoArray.splice(index,1)
		setAlmacenarTarea(borradoArray)
	}

    return (
        <div>

            <input className="container" style={{width:"290px"}} type="text" onChange={añadirTarea} value={inputCreado}  onKeyPress={crearArray} />

            <div>
                {
				almacenarTarea.map((tarea,index) => <Lista borrarTarea={borrarTarea} tarea={tarea} key={index}/> )
				}
            </div>

        </div>

    )
}

export default Formulario;