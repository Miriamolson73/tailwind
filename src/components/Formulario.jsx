import React, {Fragment, useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid/dist/v4';
import "../index.css";
// import "tailwindcss/tailwind.css";
const Formulario = ({crearTurno}) => {

// Creamos el state turnos
// Recordar que es [nombre, función que lo modifica]
// Inicializamos con un objeto vacío pero definido

const [turno, actualizarTurno] = useState ({
    mascota: '',
    propietario: '',
    fecha:'',
    hora:'',
    sintomas:''
});

// Creamos el state error
// para validar las entradas del formulario

const [error, actualizarError] = useState (false);

// Esta handleChange (se acostumbra a poner así, handleLoquevenga) es para
// leer los datos a medida que el usuario escribe
// en lo campos del form. Así vamos validando en tiempo real

const handleChange = e => {
    actualizarTurno({
        ...turno,
        [e.target.name] : e.target.value
    }
    )
}

// Extraer los valores

const {mascota, propietario, fecha, hora, sintomas} = turno;

// Cuando se envía el formulario se juega todo esto.

const submitTurno = e => {
    e.preventDefault();
    // Esta prevent es para que no tire error porque al pcipio. están los campos vacíos.

    // Validar

    if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
        console.log("Tenés que completar todos los campos");
        actualizarError(true);
        return;
    }

    // Eliminar mensaje error
    actualizarError(false);

    // Asignar ID
    turno.id = uuid();

    // Crear Turno
    crearTurno(turno);

    // Reiniciar el form
    actualizarTurno({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:'' 
    })
}


    return (
        <Fragment>
            <div class="bg-orange-400  grid grid-rows-1 px-4 ">
             <div class="text-center grid grid-rows-1 px-4">  
                  <h2 class="bg-pink-200 my-5 text-xl ">Crear turno</h2>

            { error ? <p > Tenés que completar todos los campos </p> : null }

            <form
                onSubmit={submitTurno}
            >
                <label class="text-pink-500 grid grid-rows-1 ">Nombre mascota</label>
                <input 
                type="text"
                name="mascota"
                value={mascota}
                placeholder="Nombre de la mascota"
                class="bg-pink-300 hover:bg-pink-100  border-2 rounded "
                onChange={handleChange}
                />
                <label  class="rounded text-pink-500 text-center grid grid-rows-1">Nombre dueño</label>
                <input 
                type="text"
                name="propietario"
                value={propietario}
                placeholder="Nombre del dueño"
                class="bg-pink-300 hover:bg-pink-100  border-2 rounded "
                
                onChange={handleChange}
                />
                <label  class="rounded text-pink-500 text-center grid grid-rows-1">Fecha de la consulta</label>
                <input 
                type="date"
                name="fecha"
                value={fecha}
                class="bg-pink-300 hover:bg-pink-100  border-2 rounded "
                // className="form-control"
                onChange={handleChange}
                />
                <label  class="rounded text-pink-500 text-center grid grid-rows-1">Hora de la consulta</label>
                <input 
                type="time"
                name="hora"
                value={hora}
                class="bg-pink-300 hover:bg-pink-100  border-2 rounded "
                // className="form-control"
                onChange={handleChange}
                /><br/>
                <label  class="rounded text-pink-500 text-center grid grid-rows-1">Síntoma</label> 
                <textarea 
                 class="bg-pink-300 hover:bg-pink-100  border-2 rounded "
               
                // {/* className="form-control"  */}
                aria-label="With textarea"
                name="sintomas"
                value={sintomas}
                onChange={handleChange}
                ></textarea>
                <br/>
                <button 
                type="submit" 
                class="bg-pink-400 hover:bg-pink-100  border-2   ">
                {/* // className="btn btn-info btn-block" */}
                AGREGAR TURNO
                </button>
            </form>
            </div>
            </div>
        </Fragment> 
     );
}
 
export default Formulario;